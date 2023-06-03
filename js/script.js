// let currentUser = 1

// switch (currentUser) {
//     case 1:
//         location.href="login.html"
//         break;
// }
let usuarios=["jhon","christian","jhonatan"]
let passwords=[1111,2222,3333]

let usuario=document.querySelector("#usuario")
let password=document.querySelector("#password")




let aceptar=document.querySelector("#login")
aceptar.addEventListener("click",validar)

let intentos = 0

function validar(e) {
    e.preventDefault();
    let errorLogin=document.querySelector(".error")  
    if (intentos < 2) {   
        intentos = intentos + 1
        for (let i =0 ; i <= usuarios.length ; i++) { 
            if (usuarios[i]== usuario.value && passwords[i]==password.value) {
                currentUser=usuario.value
                location.href="index.html"   
            }else{                                
                errorLogin.textContent="usuario o contraseña no valido"
                password.value = ""
            }            
        }              
    }else{
        errorLogin.textContent="has superado el limite de intentos"
        password.value = ""
        aceptar.style.display = "none";
    }
}