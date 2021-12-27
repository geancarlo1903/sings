<?php
//variables globales
session_start();
ob_start();
if(isset($_POST)){
    //nombre de usuario
    $name = $_POST['usuario'];
    //contrasela de usuario
    $contraseña = $_POST['contraseña'];
    //conexion
    require "conexion.php";
    //consulta
    $consulta = $pdo->prepare("SELECT * FROM usuarios WHERE nombre = '$name'");
    $consulta->execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $pdo = null;
    if($resultado){
        echo "Existe";
    }else{
        //nombre de la carpeta
        $ncarpeta = $_POST['usuario']."/img";
        //ruta
        $cruta = "../img/usuarios/";
        //ruta y carpeta a crear
        $RCarpeta = $cruta.$ncarpeta;
        //creacion de carpeta
        if(!is_dir($RCarpeta)){
            $crear = mkdir($RCarpeta,0777,true);
            if($crear){
            $mensaje = "Carpeta creada";    
            }else{
            $mensaje = "a ocurrido un error al crear el directorio";
            }
        }else{
        $mensaje = "El directorio ya existe";
        }
        //registro de nuevo usuario
        if($mensaje=="Carpeta creada"){
            require("conexion.php");
            $query = $pdo->prepare("insert into usuarios(id,nombre,contraseña) values('NULL','$name','$contraseña')");
            $query->execute();
            $pdo = null;
            $_SESSION['Usiario']=$name;
            echo "Registrado";
        }else{
            echo $mensaje;
        }
    }
}
?>