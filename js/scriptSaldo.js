// funcion para consultar saldo
const saldoUsuario = 10000000
let valorConsignar = document.querySelector(".valorConsignar")
let numeroCuentaConsignar = document.querySelector(".numCuentaConsignar")
let valorRetirar = document.querySelector(".saldoARetirar")
let consultarSaldo = document.querySelector("#consultarSaldo")
consultarSaldo.addEventListener("click",saldo)
let nuevosaldo=saldoUsuario
let dineroRetirado = 0
let dineroConsignado = 0

function nuevoSaldo() {
    
}

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

//funcion que oculta la taba del historial
function OcultarTablaHistoria() {
    tabla = document.querySelector(".tablaOperaciones")
    tabla.style.display="none"
}
// funcion que muestra el saldo y oculta la tabla del historial
function saldo(e) {
    e.preventDefault();
    console.log("entro a saldo")
    let saldos = document.querySelector(".saldo")
    
    if ((dineroConsignado>0||dineroRetirado>0)) {
        nuevosaldo = (Number(nuevosaldo) + Number(dineroConsignado)-Number(dineroRetirado)) 
        dineroRetirado=0
        dineroConsignado=0  
    }else{
        nuevosaldo = nuevosaldo
    }
    saldos.textContent = nuevosaldo
    tablasConsultarSaldo()
    OcultarTablaHistoria()
 }
//creacion de evento que muestra el historial
let consultarOperaciones = document.querySelector("#consultarOperaciones")
consultarOperaciones.addEventListener("click",operaciones)

function operaciones(e) {
    e.preventDefault();
    let initabla = document.querySelector("#iniTabla")
    initabla.style.display="block" 
    tabla = document.querySelector(".tablaOperaciones")
    tabla.style.display="block"
}

// creacion de evento y funcion que muentran consignaciones
let menuConsignar = document.querySelector(".consignar")
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
	document.getElementById("mensajeConsigancion").innerHTML = mensaje;
}

function consignar(e) {
    e.preventDefault();
    // let menuConsignar = document.querySelector(".menuConsignar")
    // menuConsignar.style.display="block" 
    OcultarTablaHistoria()
    valorConsignar = document.querySelector(".valorConsignar")
    valorConsignar.value 
    numeroCuentaConsignar = document.querySelector(".numCuentaConsignar")
    valorConsignar.value
    console.log(valorConsignar.value)  
}

let aceptarconsignacion = document.querySelector(".aceptarConsignacion")
aceptarconsignacion.addEventListener("click",validarConsignacion)
function validarConsignacion() {
    console.log(valorConsignar.value)
    if (valorConsignar.value>0 && numeroCuentaConsignar.value>0) {
        alertaConsignacion()
        
    }else {
        alert("asegurese de ingresar un valor a consignar y un numero de cuenta valido e intentelo nuevamente.")
    }
    
}

// crea el  retiro


let menuRetirar = document.querySelector("#retirarSaldo")
menuConsignar.addEventListener("click",retirar)

function alertaRetiro()
    {
    var mensaje;
    var opcion = confirm("estas seguro que deseas continuar con el retiro");
    if (opcion == true) {
        tablaRetirar()
        alert("retiro realizado con exito")
        dineroRetirado = valorRetirar.value 
        valorRetirar.value = ""       
	} else {
        alert("se cancelo el retiro")
	}
	document.getElementById("mensajeConsigancion").innerHTML = mensaje;
}

function retirar(e) {
    e.preventDefault();
    // let menuConsignar = document.querySelector(".menuConsignar")
    // menuConsignar.style.display="block" 
    OcultarTablaHistoria()
    let valorRetirar = document.querySelector(".saldoARetirar")
    valorRetirar.value
     
}

let aceptarRetiro = document.querySelector(".aceptarRetiro")
aceptarRetiro.addEventListener("click",validarRetiro)
function validarRetiro() {
    console.log(valorRetirar.value)
    if (valorRetirar.value<=nuevosaldo && valorRetirar.value>0) {
        alertaRetiro()
        
    }else {
        alert("error, asegurese de contar con el saldo suficiente o haber ingresado un valor e intentenlo nuevamente.")
    }
    
}

