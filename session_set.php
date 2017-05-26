<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$fname = $request->fname;
$email = $request->email;
$lname = $request->lname;
$id = $request->userid;
$token = $request->token;
session_start();
$_SESSION['fname'] = $fname;
$_SESSION['lname'] = $lname;
$_SESSION['email'] = $email;
$_SESSION['id'] = $id;
$_SESSION['token'] = $token;

?>