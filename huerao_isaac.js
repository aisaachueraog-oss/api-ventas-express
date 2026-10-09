
function sumarArreglo(arreglo) {
    if (arreglo.length > 20) {
        return {
            total_sumados: 0,
            total_items: arreglo.length,
            suma: 0,
            mensaje: "Arreglo demasiado grande (Máximo 20 items)"
        };
    }

    let total_sumados = 0;
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === "number") {
            suma += arreglo[i];
            total_sumados++;
        }
    }

    let mensaje = "";
    if (suma < 100) {
        mensaje = "Total pequeño";
    } else if (suma === 100) {
        mensaje = "100 perfecto";
    } else {
        mensaje = "Total mayor";
    }

    return {
        total_sumados: total_sumados,
        total_items: arreglo.length,
        suma: suma,
        mensaje: mensaje
    };
}

// Ejemplo de uso
const arreglo = [10, 20, "texto", 30, 40, 50];
const resultado = sumarArreglo(arreglo);
console.log(resultado);
