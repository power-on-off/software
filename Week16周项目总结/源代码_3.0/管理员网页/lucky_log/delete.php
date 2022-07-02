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
    <body  bgcolor="#FFFFDC">
    	<?php
        	$link = mysqli_connect('127.0.0.1','lucky_log','Xx3Fi3XEh7asPcda','lucky_log');
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
