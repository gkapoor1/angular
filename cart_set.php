<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$userid = $request->userid;
$sku = $request->sku;
session_start();
//$_SESSION['cart'] = $sku;
if($_SESSION['cart'] == NULL)
	$_SESSION['cart'] = array($sku);
else
	array_push($_SESSION['cart'] , $sku);
?>