<?php
if(isset($_POST)){
    $ncarpeta = $_POST['usuario']."/img";
    $cruta = "../img/usuarios/";
    $RCarpeta = $cruta.$ncarpeta;
    $name = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];
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
    require("conexion.php");
    $query = $pdo->prepare("insert into usuarios(id,nombre,contraseña) values('NULL','$name','$contraseña')");
    $query->execute();
    $pdo = null;
    echo "Registrado ".$mensaje;
}
?>