let cantidadBanios = 0;
let validInput = false;

while (!validInput) {

    cantidadBanios = parseInt(prompt("¿Cuántos baños desea alquilar?"));

    if (cantidadBanios >= 2 && !isNaN(cantidadBanios)) {
        validInput = true;

    } else {
        alert("La cantidad mínima de baños para alquilar es 2. Ingresa un valor válido.");
    }
}

let dias = parseInt(prompt("¿Por cuántos días desea alquilar los baños químicos?"));
const PRECIOXDIA = 5000;
let serviciosMantenimiento = prompt("¿Deseas solicitar servicios de mantenimiento y limpieza? Responde 'si'/'no'.").toLowerCase();
let pagos = prompt("¿Desea pagar en efectivo? Responde 'si'/'no'.").toLowerCase();
let tarjetaCuotas = 1;

let total = 0;

if (dias > 0 && !isNaN(dias)) {
    if (dias > 5) {
        total = dias * 3000;

    } else if (dias > 3) {
        total = dias * 4000;

    } else {
        total = dias * PRECIOXDIA;
    }

    if (serviciosMantenimiento === 'si') {
        total += total * 0.1;
    }

    if (cantidadBanios >= 10) {
        total -= total * 0.1;
    }

    if (pagos === 'no') {
        tarjetaCuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? (cantidad máxima de cuotas 6)"));

        if (tarjetaCuotas > 3 && tarjetaCuotas <= 6) {
            const RECARGO = total * 0.05;
            total += RECARGO;
        }
    }

    let mensaje = "Detalles del presupuesto:\n";
    mensaje += "Cantidad de baños químicos: " + cantidadBanios + "\n";
    mensaje += "Duración del alquiler: " + dias + " día(s)\n";
    mensaje += "Servicios de mantenimiento y limpieza: " + (serviciosMantenimiento === 'si' ? "Sí" : "No") + "\n";
    mensaje += "Cuotas para el pago con tarjeta: " + tarjetaCuotas + "\n";
    mensaje += "---------------------------------\n";
    mensaje += "Total a pagar: $" + total;

    alert(mensaje);

} else {
    alert("Debes ingresar un número válido de días.");
}