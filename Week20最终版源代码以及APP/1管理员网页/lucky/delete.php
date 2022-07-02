<!doctype html>
<html>
    <?php
        require_once('../login.php');
        MkEncrypt('sysu123'); 
    ?>
    <head>
        <meta charset = "utf-8">
        <title>删除记录</title>
    </head>
    <body bgcolor="#E6E6FA">
    	<?php
        	$link = mysqli_connect('127.0.0.1','lucky','acAhAk6E7FrR2G5J','lucky');
        	if (!$link) {
        		exit('数据库连接失败！');
        	}
        	session_start();
        	$del = $_SESSION['del'];
        	mysqli_query($link,"delete from lucky_sign where id = $del ");
        	unset($_SESSION['del']);
        	header('location:index.php');
    	?>
    </body>
</html>