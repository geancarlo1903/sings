<?php
//variables globales
session_start();
ob_start();
//toma de datos
$name = $_POST['usuario'];
$passwor = $_POST['contraseña'];
//conexion con la base de datos 
require "conexion.php";
//consulta
$consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nombre = '$name'");
$consulta->execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$pdo = null;
//validaciones
if($name == $resultado['nombre'] && $passwor == $resultado['contraseña']){
    $_SESSION['Usiario']=$name;
    echo "correcto";
}else{
    echo "error";
}
?>