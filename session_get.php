<?php
session_start();

if($_SESSION['id'] == NULL)
	$data = "No Session";
else
	$data = array('userid' => $_SESSION['id'],'email' => $_SESSION['email'] , 'fname' => $_SESSION['fname'] , 'lname' => $_SESSION['lname'] , 'token' => $_SESSION['token']);
header('Content-Type: application/json');
echo json_encode($data);


?>