let usuarios=["jhon","christian","jhonatan"]
let passwords=[1111,2222,3333]

let usuario=document.querySelector("#usuario")
let password=document.querySelector("#password")

let aceptar=document.querySelector("#login")
aceptar.addEventListener("click",validar)

let intentos = 0
let i = 0

function validar(e) {
    e.preventDefault();
    let errorLogin=document.querySelector("#error")  
    if (intentos < 3) {   
        intentos = intentos + 1
        for (i =0 ; i <= 2 ; i++) { 
            if (usuarios[i]== usuario.value && passwords[i]==password.value) {
                currentUser=usuario.value
                location.href="menu.html"

            }else{  
                                              
                errorLogin.textContent="usuario o contraseña no valido"
                
            } 
            //password.value = ""           
        }
        password.value = ""                
    }else{
        errorLogin.textContent="has superado el limite de intentos"
        aceptar.style.display = "none";
    }
}