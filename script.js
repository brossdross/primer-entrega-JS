let costoBase = 600
let costoPremium = 1000
let precioBase = 1200
let precioPremium = 2000

let gastosBase = prompt("¿Cuantos autos se lavaron hoy con el servicio base?")
let gastosPremium = prompt("¿Cuantos autos se lavaron hoy con el servicio premium?")
let gastoBase = (costoBase * gastosBase)
let gastoPremium = (costoPremium * gastosPremium)
let gananciaBase = (precioBase * gastosBase - costoBase)
let gananciaPremium = (precioPremium * gastosPremium - costoPremium)
alert("En el día de la fecha usted posee un costo operativo de " + gastoBase + " en el servicio de lavado basico, y un costo operativo de " + gastoPremium + " en el servicio de lavado premium. Usted genero " + gananciaBase + " de ganancia en el servicio base y " + gananciaPremium + " en el servicio premium")