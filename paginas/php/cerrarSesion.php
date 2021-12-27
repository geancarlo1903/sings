<?php
session_start();
ob_start();
$_SESSION['Usiario']="";
$_SESSION['Contraseña']="";
echo$_SESSION['Usiario'].$_SESSION['Contraseña'];
?>