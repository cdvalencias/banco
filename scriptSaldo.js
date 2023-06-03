// funcion para consultar saldo
const saldoUsuario = 10000000
let valorConsignar = document.querySelector(".valorConsignar")
let consultarSaldo = document.querySelector("#consultarSaldo")
consultarSaldo.addEventListener("click",saldo)

//funcion que crea tabla del historial
function tablas() {
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

//funcion que oculta la taba del historial
function OcultarTablaHistoria() {
    tabla = document.querySelector(".tablaOperaciones")
    tabla.style.display="none"
}
// funcion que muestra el saldo y oculta la tabla del historial
function saldo(e) {
    e.preventDefault();
    let saldos = document.querySelector(".saldo")
    saldos.value = "su saldo es " + saldoUsuario

    tablas()
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

// creacion de evento y funcion que muentran condignaciones
let menuConsignar = document.querySelector(".consignar")
menuConsignar.addEventListener("click",consignar)

function alertaConsignacion()
    {
    var mensaje;
    var opcion = confirm("estas seguro que deseas continuar con la cosignacion");
    if (opcion == true) {
        mensaje = "se ha consignado con exito";
        tablas()
	} else {
	    mensaje = "se cancelo la consigancion";
	}
	document.getElementById("mensajeConsigancion").innerHTML = mensaje;
}

function consignar(e) {
    e.preventDefault();
    let menuConsignar = document.querySelector(".menuConsignar")
    menuConsignar.style.display="block" 
    OcultarTablaHistoria()
    valorConsignar = document.querySelector(".valorConsignar")
    valorConsignar.value 
    console.log(valorConsignar.value)  
}
let aceptarconsignacion = document.querySelector(".aceptarConsignacion")
aceptarconsignacion.addEventListener("click",sola)
function sola() {
    console.log(valorConsignar.value)
    if (valorConsignar.value>0) {
        alertaConsignacion()
    }  
}
