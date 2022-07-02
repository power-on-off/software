<!doctype html>
<html>
    <?php
        require_once('../login.php');
        MkEncrypt('sysu123'); 
    ?>
<head>
<meta charset = "utf-8">
<title>新增学生记录</title>
</head>
    <?php 
        //放个头部的链接区
        require("../head.html"); 
    ?>
<body  bgcolor="#FFFFDC">
	<h1 align = "center">新增待审核幸运签记录</h1>
	<form action = "" method = "post" name = "inf">
		<p align = "center">幸运签ID<input type = "text" name = "sn" /></p>
		<p align = "center">幸运签署名<input type = "text" name = "ss" /></p>
		<p align = "center">幸运签内容<input type = "text" name = "sa" /></p>
		<p align = "center"><input type = "submit" name = "insub" value = "提交" /></p>
	</form>
	<?php
	session_start();
	$link = mysqli_connect('127.0.0.1','lucky_log','Xx3Fi3XEh7asPcda','lucky_log');
	if (!$link){
		exit('数据库连接失败！');
	}
	if (!empty($_POST["insub"])){
		$sn = $_POST['sn'];
		$ss = $_POST['ss'];
		$sa = $_POST['sa'];
		mysqli_query($link,"insert lucky_sign (id,sign,content) values ($sn,'$ss','$sa')");
		$_SESSION['yes'] = '添加成功！';
		header('location:index.php');
	}
	?>
</body>
</html>


