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