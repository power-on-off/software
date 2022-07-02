<?php
    ///随机获取幸运签(使用ID_input进行查询)
    $link = mysqli_connect('127.0.0.1','lucky','acAhAk6E7FrR2G5J','lucky');
	if (!$link) {
		exit('数据库连接失败！');
    }
    $op = $_GET['op'];
    
    //功能一：随机获取幸运签
    if ($op == 1) {
        $sql = "select max(id) as max from lucky_sign;";
        $mysqli_result = mysqli_query($link,$sql);
        
        $row = mysqli_fetch_assoc($mysqli_result);
        $max_id = $row["max"]; 
        
        //如果请求到的是空集，则再请求一次
        $flag = 1;
        while($flag) {
            $id_rand = rand(1, $max_id);
            $sql = "select id, sign, content from lucky_sign where id = ".$id_rand.";";
            $mysqli_result = mysqli_query($link,$sql);
            $row = mysqli_fetch_assoc($mysqli_result);
            
            if ($row) {
                $flag = 0;
            } 
        }
    }
    //功能二，查询待审核幸运签情况
    if ($op == 2) {
        $link = mysqli_connect('127.0.0.1','lucky_log','Xx3Fi3XEh7asPcda','lucky_log');
        $sel = $_GET["sel"];
        $sql = "SELECT * from lucky_sign where id = ".$sel;
    }       
    
    $result = array();
  
    $mysqli_result = mysqli_query($link,$sql);
    
    //如果有报错显示
    echo $link->error;
    // 关联数组
    $row = mysqli_fetch_assoc($mysqli_result);
    
    
    $ans_count = 0;
    
    if ($row != null) {
        $ans_count++;
        foreach ($row as $key => $value) {
            //把键/值取出放到result数组的data下
            $result["data"][$key] = $value;
        }
    }

    // 释放结果集
    mysqli_free_result($mysqli_result);
    //关闭数据库
    mysqli_close($link);
    
    
    if ($ans_count > 0) {
        $result["code"] = 200;
    }   else {
        $result["code"] = 400;
    }
    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>
