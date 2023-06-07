// declaracion de variables
const saldoUsuario = 10000000
let valorConsignar = document.querySelector("#valorConsignar")
let numeroCuentaConsignar = document.querySelector("#numCuentaConsignar")
let valorRetirar = document.querySelector("#saldoARetirar")
let valorTransferir = document.querySelector("#valorTransferencia")
let numeroCuentaTransferir = document.querySelector("#numCuentaTransferir")
let nuevosaldo=saldoUsuario
let dineroRetirado = 0
let dineroConsignado = 0
let dineroTransferir = 0

//funcion ocultar saldo

function ocultarSaldo() {
    let ocultarSaldo=document.querySelector("#consultar_Saldo")
    ocultarSaldo.style.display="none"
}

//funcion ocultar retirar
function ocultarRetirar() {
    let ocultarRetirar=document.querySelector("#retirar_Saldo")
    ocultarRetirar.style.display="none"
}

//funcion ocultar transferir
function ocultarTransferir() {
    let ocultarTransferir=document.querySelector("#transferir_Saldo")
    ocultarTransferir.style.display="none"
}

//funcion ocultar consignacion
function ocultarConsignacion() {
    let ocultarConsignacion=document.querySelector("#consignar_Saldo")
    ocultarConsignacion.style.display="none"
}

//funcion ocultar imagen de fondo
function ocultarImagen() {
    let ocultarImagen=document.querySelector(".imagenDeFondo")
    ocultarImagen.style.display="none"
}

//evento consultar saldo

let consultarSaldo = document.querySelector("#consultarSaldo")
consultarSaldo.addEventListener("click",saldo)

//funcion que crea tabla consultar saldo  del historial
function tablasConsultarSaldo() {
    var today = new Date();

    let tr = document.createElement("tr")
    let tdFecha = document.createElement("td")
    let tdCajero = document.createElement("td")
    let tdOperaciones = document.createElement("td")
    let tabla = document.querySelector(".tablaOperaciones")

    tdFecha.textContent = today.toLocaleString();
    tdCajero.textContent = "cajero 23444"
    tdOperaciones = "consulta de saldo"
    tabla.classList.add("tbody")
    tr.classList.add(".tablaOperaciones")
    tr.append(tdFecha,tdCajero,tdOperaciones)
    tabla.append(tr)
}


//funcion que crea tabla consignar del historial
function tablaConsignar() {
    var today = new Date();

    let tr = document.createElement("tr")
    let tdFecha = document.createElement("td")
    let tdCajero = document.createElement("td")
    let tdOperaciones = document.createElement("td")
    let tabla = document.querySelector(".tablaOperaciones")

    tdFecha.textContent = today.toLocaleString();
    tdCajero.textContent = "cajero 23444"
    tdOperaciones = "consignacion"
    tabla.classList.add("tbody")
    tr.classList.add(".tablaOperaciones")
    tr.append(tdFecha,tdCajero,tdOperaciones)
    tabla.append(tr)
}
//funcion que crea tabla retirar del historial

function tablaRetirar() {
    var today = new Date();

    let tr = document.createElement("tr")
    let tdFecha = document.createElement("td")
    let tdCajero = document.createElement("td")
    let tdOperaciones = document.createElement("td")
    let tabla = document.querySelector(".tablaOperaciones")

    tdFecha.textContent = today.toLocaleString();
    tdCajero.textContent = "cajero 23444"
    tdOperaciones = "retiro"
    tabla.classList.add("tbody")
    tr.classList.add(".tablaOperaciones")
    tr.append(tdFecha,tdCajero,tdOperaciones)
    tabla.append(tr)
}
//funcion que crea tabla transferir del historial

function tablaTransferir() {
    var today = new Date();

    let tr = document.createElement("tr")
    let tdFecha = document.createElement("td")
    let tdCajero = document.createElement("td")
    let tdOperaciones = document.createElement("td")
    let tabla = document.querySelector(".tablaOperaciones")

    tdFecha.textContent = today.toLocaleString();
    tdCajero.textContent = "cajero 23444"
    tdOperaciones = "transferir"
    tabla.classList.add("tbody")
    tr.classList.add(".tablaOperaciones")
    tr.append(tdFecha,tdCajero,tdOperaciones)
    tabla.append(tr)
}

//funcion que oculta la taba del historial

function OcultarTablaHistoria() {
    tabla = document.querySelector(".tablaOperaciones")
    tabla.style.display="none"
}
// funcion que muestra el saldo 

function saldo(e) {
    e.preventDefault();
    console.log("entro a saldo")
    let saldos = document.querySelector("#saldo")
    
    if ((dineroConsignado>0 || dineroRetirado>0 || dineroTransferir>0)) {
        nuevosaldo = (Number(nuevosaldo) + Number(dineroConsignado)-Number(dineroRetirado)-Number(dineroTransferir)) 
        dineroRetirado=0
        dineroConsignado=0
        dineroTransferir=0  
    }else{
        nuevosaldo = nuevosaldo
    }
    saldos.textContent = nuevosaldo
    tablasConsultarSaldo()
    OcultarTablaHistoria()
    let ocultarSaldo=document.querySelector("#consultar_Saldo")
    ocultarSaldo.style.display="block"
    ocultarRetirar()
    ocultarTransferir()
    ocultarConsignacion()
    ocultarImagen()
    
 }

//creacion de evento y funcion que muestra el historial

let consultarOperaciones = document.querySelector("#consultarOperaciones")
consultarOperaciones.addEventListener("click",operaciones)

function operaciones(e) {
    e.preventDefault();
    let initabla = document.querySelector("#tablas")
    initabla.style.display="block" 
    tabla = document.querySelector(".tablaOperaciones")
    tabla.style.display="block"
    ocultarSaldo()
    ocultarRetirar()
    ocultarTransferir()
    ocultarConsignacion()
    ocultarImagen()
    
}

// creacion de evento y funcion que muentra consignaciones

let menuConsignar = document.querySelector("#consignar")
menuConsignar.addEventListener("click",consignar)

function alertaConsignacion()
    {
    var mensaje;
    var opcion = confirm("estas seguro que deseas continuar con la cosignacion");
    if (opcion == true) {
        tablaConsignar()
        alert("consignacion realizada con exito") 
        dineroConsignado = valorConsignar.value 
        valorConsignar.value = "" 
        numeroCuentaConsignar.value = ""     
	} else {
        alert("se cancelo la consignacion")
	}
	// document.getElementById("mensajeConsigancion").innerHTML = mensaje;
}

function consignar(e) {
    e.preventDefault();
    // let menuConsignar = document.querySelector(".menuConsignar")
    // menuConsignar.style.display="block" 
    OcultarTablaHistoria()
    valorConsignar = document.querySelector("#valorConsignar")
    valorConsignar.value 
    numeroCuentaConsignar = document.querySelector("#numCuentaConsignar")
    valorConsignar.value
    console.log(valorConsignar.value)
    ocultarSaldo()
    ocultarRetirar()
    ocultarTransferir()
    let ocultarConsignacion=document.querySelector("#consignar_Saldo")
    ocultarConsignacion.style.display="block"
    ocultarImagen()  
}

let aceptarconsignacion = document.querySelector("#aceptarConsignacion")
aceptarconsignacion.addEventListener("click",validarConsignacion)
function validarConsignacion() {
    console.log(valorConsignar.value)
    if (valorConsignar.value > 0 && numeroCuentaConsignar.value > 0 ) {
        alertaConsignacion()
        
    }else {
        alert("asegurese de ingresar un valor a consignar y un numero de cuenta valido e intentelo nuevamente.")
    }
    
}

// funcion y evento que permite el retiro de dinero

let menuretirar = document.querySelector("#retirarSaldo")
menuretirar.addEventListener("click",retirar)

function alertaRetiro()
    {
    var mensaje;
    var opcion = confirm("estas seguro que deseas continuar con el retiro");
    if (opcion == true) {
        tablaRetirar()
        alert("retiro realizado con exito")
        dineroRetirado =  valorRetirar.value 
        valorRetirar.value = ""       
	} else {
        alert("se cancelo el retiro")
	}
	// document.getElementById("mensajeConsigancion").innerHTML = mensaje;
}

function retirar(e) {
    e.preventDefault();
    // let menuConsignar = document.querySelector(".menuConsignar")
    // menuConsignar.style.display="block" 
    OcultarTablaHistoria()
    valorRetirar = document.querySelector("#saldoARetirar")
    valorRetirar.value
    ocultarSaldo()
    let ocultarRetirar=document.querySelector("#retirar_Saldo")
    ocultarRetirar.style.display="block"
    ocultarTransferir() 
    ocultarConsignacion()
    ocultarImagen()
    
}

let aceptarRetiro = document.querySelector("#aceptarRetiro")
aceptarRetiro.addEventListener("click",validarRetiro)
function validarRetiro() {
    console.log(valorRetirar.value)
    if (valorRetirar.value <=nuevosaldo && valorRetirar.value > 0) {
        alertaRetiro()
        
    }else {
        alert("error, asegurese de contar con el saldo suficiente o haber ingresado un valor e intentenlo nuevamente.")
    }
    
}

// funcion y evento que permite la transferencia de dinero


let menuTransferencia = document.querySelector("#transferirSaldo")
menuTransferencia.addEventListener("click",transferencia)

function alertaTransferencia()
    {
    var mensaje;
    var opcion = confirm("estas seguro que deseas continuar con la transferencia");
    if (opcion == true) {
        tablaTransferir()
        alert("transferencia realizada con exito")
        dineroTransferir = valorTransferir.value
        valorTransferir.value = "" 
        numeroCuentaTransferir.value = ""      
	} else {
        alert("se cancelo la transferencia")
	}
	// document.getElementById("mensajeConsigancion").innerHTML = mensaje;
}

function transferencia(e) {
    e.preventDefault();
    // let menuConsignar = document.querySelector(".menuConsignar")
    // menuConsignar.style.display="block" 
    OcultarTablaHistoria()
    valorTransferir = document.querySelector("#valorTransferencia")
    valorTransferir.value
    ocultarSaldo()
    ocultarRetirar()
    let ocultarTransferir=document.querySelector("#transferir_Saldo")
    ocultarTransferir.style.display="block"
    ocultarConsignacion()
    ocultarImagen()
}

let aceptarTransferencia = document.querySelector("#aceptarTransferencia")
aceptarTransferencia.addEventListener("click",validarTransferencia)

function validarTransferencia() {
    if (valorTransferir.value <= nuevosaldo && valorTransferir.value > 0 && numeroCuentaTransferir.value > 0) {
        alertaTransferencia()
        
    }else {
        alert("error, asegurese de contar con el saldo suficiente o haber ingresado un valor y haber ingresado un numero de cuenta e intentenlo nuevamente.")
    }
    
}