import {entrar,registrarse,cerrarSesion} from '../js/funciones.js';
User.addEventListener("click",()=>{
    fetch("php/ValidacionSesion.php")
    .then(response=> response.text()).then(response =>{
        if(response == "" || response == null){
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
        }else{
            console.log(response);
            Swal.fire({
                title: 'quieres cerrar sesion',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si!',
                cancelButtonText: 'NO'
            }).then((result) => {
                //inicia sesion
                if(result.isConfirmed){
                    cerrarSesion();
                }
            
            })
        }
    })

});