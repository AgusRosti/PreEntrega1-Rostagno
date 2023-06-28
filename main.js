let tarifaDiaria = 1500;

let diasAlquiler;
while (true) {
    diasAlquiler = parseInt(prompt("Ingrese la cantidad de días de alquiler:"));

    if (!isNaN(diasAlquiler) && diasAlquiler > 0) {
        break;
    }

    alert("Por favor, ingrese un valor numérico válido y mayor a cero.");
}

let cantidadBanios;
while (true) {
    cantidadBanios = parseInt(prompt("Ingrese la cantidad de baños químicos a alquilar:"));

    if (!isNaN(cantidadBanios) && cantidadBanios > 0) {
        break;
    }

    alert("Por favor, ingrese un valor numérico válido y mayor a cero.");
}

let totalAlquiler = tarifaDiaria * diasAlquiler * cantidadBanios;


function aplicarDescuento(diasAlquiler, totalAlquiler) {
    if (diasAlquiler >= 7) {
        totalAlquiler -= 3000; 

    } else if (diasAlquiler >= 3) {
        totalAlquiler -= 1500; 
    }
    
    return totalAlquiler;
}

    totalAlquiler = aplicarDescuento(diasAlquiler, totalAlquiler);
    console.log("Total a pagar con descuento: $" + totalAlquiler);


let mensaje = "Presupuesto de alquiler:\n";
mensaje += "Días de alquiler: " + diasAlquiler + "\n";
mensaje += "Cantidad de baños químicos: " + cantidadBanios + "\n";
mensaje += "Tarifa diaria por baño: $" + tarifaDiaria + "\n";
mensaje += "Total a pagar: $" + totalAlquiler + "\n";
alert(mensaje);