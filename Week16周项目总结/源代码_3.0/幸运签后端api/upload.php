<?php
    //上传待审核的幸运签，输入ls,lc
    $link_log = mysqli_connect('127.0.0.1','lucky_log','Xx3Fi3XEh7asPcda','lucky_log');
	if (!$link_log) {
		exit('数据库连接失败！');
    }
    
    //上传幸运签到缓冲幸运签数据库中
    $sql = "select max(id) as max from lucky_sign;";
    $mysqli_result = mysqli_query($link_log,$sql);
    $row = mysqli_fetch_assoc($mysqli_result);
    $max_id = $row["max"];
    
    $ls = $_GET['ls'];
    $lc = $_GET['lc'];   

    $sql = "insert lucky_sign (id,sign,content) values ($max_id + 1,'$ls','$lc')";
    
    $result = array();
    $mysqli_result = mysqli_query($link_log,$sql);
    
    //如果有报错显示
    echo $link_log->error;
    //关闭数据库
    mysqli_close($link_log);
    
    if ($mysqli_result) {
        $result["code"] = 200;
        $result["id"] = $max_id + 1;
    }   else {
        $result["code"] = 400;
    }
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>
