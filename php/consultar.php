<?php
$name = $_POST['usuario'];
require "conexion.php";
$consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nombre = '$name'");
$consulta->execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$pdo = null;
echo json_encode($resultado);
?>