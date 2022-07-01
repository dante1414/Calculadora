function reset() {
    document.getElementById("formulario").reset()
}

function sumar(){
    let x = parseInt(document.getElementById("resultado1").value)
    let y = parseInt(document.getElementById("resultado2").value)
    document.getElementById("res").innerHTML = x+y;
}
function resta(){
    let x = parseInt(document.getElementById("resultado1").value)
    let y = parseInt(document.getElementById("resultado2").value)
    document.getElementById("res").innerHTML = x-y;
}
function dividir(){
    let x = parseInt(document.getElementById("resultado1").value)
    let y = parseInt(document.getElementById("resultado2").value)
    document.getElementById("res").innerHTML = x/y;
}
function multiplicar(){
    let x = parseInt(document.getElementById("resultado1").value)
    let y = parseInt(document.getElementById("resultado2").value)
    document.getElementById("res").innerHTML = x*y;
}