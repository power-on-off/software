<!doctype html>
<html>
    <?php
        require_once('../login.php');
        MkEncrypt('sysu123'); 
    ?>
<head>
    <style type="text/css"> 

    table
    {
        border-collapse: collapse;
        margin: 0 auto;
        text-align: center;
    }
    table td, table th
    {
        border: 1px solid #cad9ea;
        color: #666;
        height: 30px;
    }
    table thead th
    {
        background-color: #CCE8EB;
        width: 100px;
    }
    table tr:nth-child(odd)
    {
        background: #fff;
    }
    table tr:nth-child(even)
    {
        background: #F5FAFA;
    }
</style>
<meta charset="utf-8">
<title>缓冲幸运签信息首页-myschool.php</title>
</head>

<body>
     <?php 
        //放个头部的链接区
        require("../head.html"); 
    ?>
	<h1 align="center">缓冲幸运签管理</h1>
	<form action="" method="post" name="indexf">
	    <p align="center"><input type="button" value="新增待审核幸运签" name="inbut" onClick="location.href='insert.php'" /></p>
		<p align="center"><input type="text"  name="sel" /><input type="submit" value="搜索" name="selsub" /></p>
		<table align="center" border="1px" cellspacing="0px" width="800px">
			<tr><th>序号</th><th>幸运签署名</th><th>内容</th><th>通过情况</th><th>操作</th></tr>
<?php
	session_start();
	if (isset($_SESSION['yes'])) {
		echo '<p align="center">'.$_SESSION['yes'].'</p>';
		unset($_SESSION['yes']);
	}
	$link = mysqli_connect('127.0.0.1','lucky_log','Xx3Fi3XEh7asPcda','lucky_log');
	if (!$link) {
		exit('数据库连接失败！');
	}
	
	if (empty($_POST["selsub"])) {
		$res = mysqli_query($link,"SELECT * from lucky_sign order by id");//全结果集
	} else {
		$sel = $_POST["sel"];
		$res = mysqli_query($link,"SELECT * from lucky_sign where id like '%$sel%' or sign like '%$sel%' or content like '%$sel%'"); //搜索框得到的结果集
	}
	while ($row = mysqli_fetch_array($res)) {
		echo '<tr align = "center">';
		echo "<td>$row[0]</td><td>$row[1]</td><td>$row[2]</td>";
		if ($row[3]) {
		    echo "<td>已审核通过</td>
		    <td>
		    <input type = 'submit' name = 'delsub$row[0]' value = '删除' />
		    </td>";
		}
		else {
		    echo "<td>尚未审核</td>
		    <td>
		    <input type = 'submit' name = 'pass$row[0]' value = '审核通过' />
		    <input type = 'submit' name = 'upsub$row[0]' value = '修改' />
		    <input type = 'submit' name = 'delsub$row[0]' value = '删除' />
		    </td>";
		}
		
		echo '</tr>';
		
		if (!empty($_POST["upsub$row[0]"])){
			echo '<tr align = "center">';
			echo "<td>$row[0]</td>
				  <td><input type = 'text' name = 'upsn' value = '$row[1]' /></td>
				  <td><input type = 'text' name = 'upss' value = '$row[2]' /></td>
				  <td><input type = 'submit' value = '确认修改' name = 'upsubs$row[0]'/></td>";
			echo '</tr>';
		}
		if (!empty($_POST["upsubs$row[0]"])) {
			$upsn = $_POST['upsn'];
			$upss = $_POST['upss'];
			mysqli_query($link,"update lucky_sign set sign = '$upsn',content = '$upss' where id = $row[0]");
			header('location:#');
		}
		
		if (!empty($_POST["pass$row[0]"])){
			$_SESSION['id'] = $row[0];
			$_SESSION['sign'] = $row[1];
			$_SESSION['content'] = $row[2];
			
			echo '<script>
				 if (confirm("是否审核通过该幸运签?") == true) {
				 	location.href = "pass.php";
				 }
			     </script>';
		}

		if (!empty($_POST["delsub$row[0]"])) {
			$_SESSION['del'] = $row[0];
			echo '<script>
				 if (confirm("是否删除该幸运签?") == true) {
				 	location.href = "delete.php";
				 }
			     </script>';

		}
	}
	mysqli_close($link);
?>
		</table>
	</form>
	<p align="center"><a  href = "https://beian.miit.gov.cn/" target = "_blank">
    本网站备案号：粤ICP备2021130317号-1</a></p>
</body>
</html>