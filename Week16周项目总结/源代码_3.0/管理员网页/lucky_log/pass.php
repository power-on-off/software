<!doctype html>
<html>
    <?php
        require_once('../login.php');
        MkEncrypt('sysu123'); 
    ?>
    <head>
        <meta charset = "utf-8">
        <title>添加记录</title>
    </head>
    <body  bgcolor="#FFFFDC">
    	<?php
    	    #插入数据到幸运签数据库中
        	$link_lucky = mysqli_connect('127.0.0.1','lucky','acAhAk6E7FrR2G5J','lucky');
        	if (!$link_lucky) {
        		exit('幸运签数据库连接失败');
        	}
        	session_start();
        	$id = $_SESSION['id'];
        	$sign = $_SESSION['sign'];
        	$content = $_SESSION['content'];
        	
        	$result = mysqli_query($link_lucky,"insert lucky_sign (id,sign,content) values ($id,'$sign','$content')");
        	
        	if ($result == NULL) {
        	    $_SESSION['yes'] = '添加失败！';
        	}
        	#插入成功的更新缓冲区数据库的内容
        	if ($result != NULL) {
        	    $link = mysqli_connect('127.0.0.1','lucky_log','Xx3Fi3XEh7asPcda','lucky_log');
            	if (!$link) {
            		exit('缓冲区数据库连接失败！');
            	}
            	$_SESSION['yes'] = '审核成功！';
            	mysqli_query($link,"update lucky_sign set if_pass = 1 where id = $id");    
        	}
        	unset($_SESSION['id']);
        	unset($_SESSION['sign']);
        	unset($_SESSION['content']);
        	
        	header('location:index.php');
    	?>
    </body>
</html>
