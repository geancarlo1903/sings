<?php
session_start();
ob_start();
$_SESSION['Usiario'];
echo$_SESSION['Usiario'];
?>