// funcion para consultar saldo
const saldoUsuario = 10000000
let consultarSaldo = document.querySelector("#consultarSaldo")
consultarSaldo.addEventListener("click",saldo)

function saldo(e) {
    e.preventDefault();
    let saldos = document.querySelector(".saldo")
    saldos.value = "su saldo es " + saldoUsuario

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
