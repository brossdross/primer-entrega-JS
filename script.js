let costoBase = 600
let costoPremium = 1000
let precioBase = 1500
let precioPremium = 2300

let gastosBase = prompt("¿Cuantos autos se lavaron hoy con el servicio base?")
let gastosPremium = prompt("¿Cuantos autos se lavaron hoy con el servicio premium?")
let gastoBase = (costoBase * gastosBase)
let gastoPremium = (costoPremium * gastosPremium)
let gananciaBase = (900 * gastosBase)
let gananciaPremium = (1300 * gastosPremium)
alert("En el día de la fecha usted posee un costo operativo de " + gastoBase + " en el servicio de lavado basico, y un costo operativo de " + gastoPremium + " en el servicio de lavado premium. Usted genero " + gananciaBase + " de ganancia en el servicio base y " + gananciaPremium + " en el servicio premium")

if (gananciaBase > 5000 && gananciaPremium > 6000) {
    return alert("Se cumplio el objetivo diario de lavados")
}
else if (gananciaBase < 5000 && gananciaPremium < 6000) {
    return alert("No se cumplio el objetivo diario de lavados")
}
else if (gananciaBase > 5000 && gananciaPremium < 6000){
    return alert("Se cumplio el objetivo diario de lavados base pero no de lavados premium")
}
else if (gananciaBase < 5000 && gananciaPremium > 6000){
    return alert("se cumplio el objetivo diario de lavados premium pero no de lavados base")
}
else (gananciaBase === 0 && gananciaPremium === 0);{
    return alert("El lavadero se encuentra cerrado")
}
