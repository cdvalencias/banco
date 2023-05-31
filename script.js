let currentUser = 1

switch (currentUser) {
    case 1:
        location.href="login.html"
        break;
}
let usuarios=["jhon","christian","jhonatan"]
let contraseñas=[1111,2222,3333]

let usuario=document.querySelector(".usuario")
let contraseña=document.querySelector(".contraseña")

let aceptar=document.querySelector(".aceptar")
aceptar.addEventListener("click",validar)

let intentos = 0

console.log(currentUser)
 console.log("jdjdjj")
function validar(e) {
    e.preventDefault();    
    let errorLogin=document.querySelector(".error")  
    if (intentos < 2) {   
        intentos = intentos + 1
        for (let i =0 ; i <= usuarios.length ; i++) { 
            if (usuarios[i]== usuario.value && contraseñas[i]==contraseña.value) {
                currentUser=usuario.value
                location.href="index.html"   
            }else{                                
                errorLogin.textContent="usuario o contraseña no valido"
                contraseña.value = ""
            }            
        }              
    }else{
        errorLogin.textContent="has superado el limite de intentos"
    }
}