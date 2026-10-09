/***************************************************************
 * SECCIÓN 1 : PREGUNTAS DE SELECCIÓN
 *
 * Marque la opción correcta en las siguientes preguntas.
 * Puede marcar con una X antecediendo la opción seleccionada.
 ***************************************************************


    1. ¿Cuál es la principal diferencia entre una función tradicional y una función flecha (arrow function) respecto a su sintaxis? (2 puntos)

    A. Solo las funciones tradicionales pueden devolver objetos.
   x B. Las funciones flecha son más compactas y no requieren la palabra clave 'function'.
    C. Las funciones flecha no pueden recibir parámetros.
    D. Las funciones tradicionales son más rápidas de ejecutar por el navegador.



    2. Si quieres crear un nuevo array que contenga solo los elementos que cumplen una condición específica, ¿qué método debes usar? (2 puntos)

   x A. filter()
    B. reduce()
    C. toSorted()
    D. map()



    3. ¿Qué hace el método .map() en JavaScript? (2 puntos)

   x A. Modifica el array original eliminando los elementos que no sirven.
    B. Crea un nuevo array con los resultados de la llamada a la función enviada en cada elemento.
    C. Busca un elemento específico dentro del array.
    D. Suma todos los números de un array automáticamente.



    4.¿Cuál es la diferencia clave entre .sort() y .toSorted()? (2 puntos)

    A. .sort() es una función flecha y .toSorted() es tradicional.
   x B. .sort() modifica el array original, mientras que .toSorted() devuelve una copia ordenada sin alterar el original.
    C. .toSorted() solo funciona con números.
    D. No existe el método .toSorted() en JavaScript.



    5. En el método .reduce( (acumulador, valorActual) => ..., 0), ¿qué representa el número 0? (2 puntos)

    A. Es el valor máximo que puede alcanzar la suma.
   x B. Es el valor inicial del acumulador.
    C. Indica que el array está vacío.
    D. Es el índice donde debe empezar a recorrer el array.
*/

/**********************************************************************
 * SECCIÓN 2 : PROGRAMACIÓN
 *
 * Lea atentamente y siga las instrucciones dejadas en los comentarios.
 * Al final de cada paso use un console.log() para mostrar el resultado
 * por pantalla.
 **********************************************************************
 */

const productos = [
    { nombre: "The Legend of Zelda", precio: 60, categoria: "Aventura", stock: 15 },
    { nombre: "FIFA 24", precio: 70, categoria: "Deportes", stock: 0 },
    { nombre: "Minecraft", precio: 30, categoria: "Construcción", stock: 20 },
    { nombre: "Elden Ring", precio: 50, categoria: "RPG", stock: 5 },
    { nombre: "Stardew Valley", precio: 15, categoria: "Simulación", stock: 10 }
];

/*
 * Paso A: Filtrar productos con stock (5 puntos)
 *
 * Crea una función llamada obtenerDisponibles que reciba el array de productos y devuelva solo aquellos cuyo stock sea mayor a 0.
 *
 * Requisito: Debes crear y usar una función tradicional (function nombre(...) { ... }).
 */
function obtenerDisponibles(prmObj){
    return prmObj.filter(item => item.stock > 0);
    //el codigo va a filtrar los productos
}
const productosConStock = obtenerDisponibles(productos);

//Se imprime la variable en la consola
console.log(productosConStock);


/*
 * Paso B: Aplicar descuentos (5 puntos)
 *
 * A partir del resultado del paso anterior, crea un nuevo array llamado productosRebajados.
 *
 * Lógica: Si el precio es mayor a 40, aplica un 20% de descuento. Si es menor o igual, un 10%.
 * Requisito: Usa el método .map() con una función flecha.
 */
const productosRebajados = productosConStock.map(item => {
        let nuevoItem = {...item};

        if (item.precio > 40){
        nuevoItem.precio = nuevoItem.precio - (nuevoItem.precio * 0.2);
    }else{
        nuevoItem.precio = nuevoItem.precio - (nuevoItem.precio * 0.1);
        }

        return nuevoItem;
});
console.log(productosRebajados);

/*
 * Paso C: Calcular el valor total del inventario (5 puntos)
 *
 * Calcula la suma total del valor de todos los productos disponibles (precio * stock).
 *
 * Requisito: Usa el método .reduce()
 */
const productoTotal = productosConStock.reduce((acumulador,Item) => {
    acumulador += Item.precio;

    return acumulador;
}, 0);

console.log(productoTotal)

/*
 * Paso D: Ordenar por nombre (5 puntos)
 *
 * Crea una copia del inventario original ordenada alfabéticamente por el nombre del videojuego.
 *
 * Requisito: Usa .toSorted() para no modificar el array original y comprueba que el original sigue igual.
 */
const ordenados = productos.toSorted((a,b) => {
       if(a > b){
        return 1;
    }else{
        return -1;
    }
});

console.log(ordenados)
