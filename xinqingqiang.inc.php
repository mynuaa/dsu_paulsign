<?php
	if (!defined('IN_DISCUZ'))
	{
		exit("...");
	}
	

		//require_once "./source/plugin/xinqingqiang/template/xinqingqiang.php";

	//require_once "./source/plugin/xinqingqiang/config/config.php";
	//echo isset($moodNum);
	//echo $moodNum;
	//echo "12 v";
	$moodNum = isset($moodNum)?$moodNum:30;
	
	$sql = "select * from ".DB::table("dsu_paulsign") ." where todaysay<>'该会员没有填写今日想说内容.' order by time desc limit $moodNum";
	//echo $sql;
	$result = DB::fetch_all($sql);
	$a = 1;
	foreach ($result as $n_result => $result1)
	{
		$uidd = $result1['uid'];
		$sql2 = "select * from ".DB::table("common_member") . " where uid=$uidd";
		//echo $sql2; 
		$result3 = DB::fetch_all($sql2);
		//print_r($result3);
		$result[$n_result][8] = $result3[0]['username'];
		//echo $result[$n_result][8];
		$result[$n_result][9] = $a++;

	}
	//print_r($result); 

	include template("dsu_paulsign:xinqingqiang");
?>