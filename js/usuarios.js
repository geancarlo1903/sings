User.addEventListener("click",()=>{
    Formulario.reset();
    Swal.fire({
        title: 'Ya tienes una cuenta',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'NO'
    }).then((result) => {
        //inicia sesion
        if(result.isConfirmed){
            
            entrar();
        }//registra el usuario
        else{
            registrarse();
        }
    })   
});
//funcion entrar
function entrar(){
    mascaraVentana.style.display = "flex";
    var titulo = formularios.getElementsByTagName("h2");
    titulo[0].innerHTML = "Inicio de sesion";
    Registrar.style.display = "none";
    Entrar.style.display = "inline";
    Entrar.addEventListener("click",()=>{
        //consulta de el susuario
        fetch("php/consultar.php", {
            method: "POST",
            body: new FormData(Formulario)
        }).then(response => response.json()).then(response => {
            //si la informacion es valida
            if(Usuario.value == response.nombre && Contraseña.value == response.contraseña){
                Swal.fire({
                    icon: 'success',
                    title: 'Iniciaste sesion',
                    showConfirmButton: false,
                    timer: 1500
                })
                mascaraVentana.style.display = "None";
                Formulario.reset();
            }//si la informacion es incorrecta
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'No localizado',
                    text: 'Usuario o contraseña incorrecto',
                  })
                  mascaraVentana.style.display = "None";
                  Formulario.reset();
            }
        })
    })
    Cancelar.addEventListener("click",()=>{
        mascaraVentana.style.display = "None";
    })
}
//funcion reguistrarse
function registrarse(){
    mascaraVentana.style.display = "flex";
    var titulo = formularios.getElementsByTagName("h2");
    titulo[0].innerHTML = "Registrate";
    Registrar.style.display = "inline";
    Entrar.style.display = "none";
    //consulta de datos para validar
    Registrar.addEventListener("click",()=>{
        fetch("php/consultar.php", {
            method: "POST",
            body: new FormData(Formulario)
        }).then(response => response.json()).then(response => {
            if(response.nombre == Usuario.value){
                Swal.fire({
                    title: 'Usuario ya registrado',
                    text: "Desera iniciar sesion",
                    icon: 'error',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'iniciar sesion',
                    cancelButtonText: 'Cancelar'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        Formulario.reset();
                        entrar();
                    }else{
                        mascaraVentana.style.display = "None";
                        Formulario.reset();
                    }
                  })
            
            }else{
                fetch("php/registrar.php", {
                    method: "POST",
                    body: new FormData(Formulario)
                }).then(response => response.text()).then(response => {
                    if(response == "Registrado Carpeta creada"){
                        Swal.fire({
                            icon: 'success',
                            title: 'Te has registrado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        mascaraVentana.style.display = "None";
                        Formulario.reset();
                    }
                })
            }
        })
       
    })
    Cancelar.addEventListener("click",()=>{
        mascaraVentana.style.display = "None";
    })
}

