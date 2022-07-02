<?php
// 密码 Cookie 加密盐
if(!defined('MK_ENCRYPT_SALT'))
define('MK_ENCRYPT_SALT', 'Kgs$JC!V');
 
/**
* 设置访问密码
* 
* @param $password 访问密码
* @param $pageid 页面唯一 ID 值，用于区分同一网站的不同加密页面
*/
function MkEncrypt($password, $pageid = 'default') {
$pageid = md5($pageid);
$md5pw = md5(md5($password).MK_ENCRYPT_SALT);
$postpwd = isset($_POST['pagepwd']) ? addslashes(trim($_POST['pagepwd'])) : '';
$cookiepwd = isset($_COOKIE['mk_encrypt_'.$pageid]) ? addslashes(trim($_COOKIE['mk_encrypt_'.$pageid])) : '';
 
if($cookiepwd == $md5pw) return; // Cookie密码验证正确
 
if($postpwd == $password) {      // 提交的密码正确
    setcookie('mk_encrypt_' . $pageid, $md5pw, time() + 10000, '/');
    return;
}
?>
<html>
<link rel = "stylesheet" type = "text/css" href = "../style.css">
<head>
    <title>尚未登录</title>
</head>
<div class="container">
    <form action="" method="post">
    <h2> <p align="center">请输入管理员密码</p></h2>
    <p align="center"> <input type="password" name="pagepwd" placeholder="请输入管理员密码" required><button type="submit">提交</button></p>
<?php if($postpwd): ?>
    <p id="pw-error" align="center">密码错误</p>
<script>setTimeout(function() {document.getElementById("pw-error").style.display = "none"}, 2000);</script>
<?php endif; ?>
</form>
</div>
</body>
</html>
<?php
exit();
}