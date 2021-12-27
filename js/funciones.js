//funcion entrar
export function entrar(){
    mascaraVentana.style.display = "flex";
    var titulo = formularios.getElementsByTagName("h2");
    titulo[0].innerHTML = "Inicio de sesion";
    Registrar.style.display = "none";
    Entrar.style.display = "inline";
    //inicio de la consulta
    Entrar.addEventListener("click",()=>{
        fetch("php/sesion.php",{
            method:"POST",
            body: new FormData(Formulario)
        }).then(response => response.text()).then(response =>{
            if(response=="correcto"){
                Swal.fire({
                    icon: 'success',
                    title: 'Iniciaste sesion',
                    showConfirmButton: false,
                    timer: 1500
                })
                mascaraVentana.style.display = "None";
                Formulario.reset();
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Usuario o contraseña incorrecta',
                    showConfirmButton: false,
                    timer: 1500
                })
                Formulario.reset();
            }
        })
    })
    //cerrar ventana
    Cancelar.addEventListener("click",()=>{
        mascaraVentana.style.display = "None";
    })
}
//funcion reguistrarse
export function registrarse(){
    mascaraVentana.style.display = "flex";
    var titulo = formularios.getElementsByTagName("h2");
    titulo[0].innerHTML = "Registrate";
    Registrar.style.display = "inline-block";
    Entrar.style.display = "none";
    //consulta de datos para validar
    Registrar.addEventListener("click",()=>{
        fetch("php/registrar.php", {
            method:"POST",
            body: new FormData(Formulario)
        }).then(response => response.text()).then(response =>{
            if(response=="Existe"){
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
                  });
            }else{
                if(response=="Registrado"){
                    Swal.fire({
                        icon: 'success',
                        title: 'Usuario reguistrado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    mascaraVentana.style.display = "None";
                    Formulario.reset();
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'No se pudo registrar',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    mascaraVentana.style.display = "None";
                    Formulario.reset();
                }
            }  
        })
        
    })
    Cancelar.addEventListener("click",()=>{
        mascaraVentana.style.display = "None";
    })
}
//funcio cerrar secion
export function cerrarSesion(){
    fetch("php/cerrarSesion.php")
    .then(response=> response.text()).then(response =>{
        Swal.fire({
        icon: 'success',
        title: 'Cerraste sesion',
        showConfirmButton: false,
        timer: 1500
        })
    })
}