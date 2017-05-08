<?php
session_start();
if($_SESSION['cart'] == NULL)
	{
		$data = 0;
		echo json_encode($data);
	}	
else
	{
		$data = $_SESSION['cart'];
		echo json_encode($data);
	}
?>