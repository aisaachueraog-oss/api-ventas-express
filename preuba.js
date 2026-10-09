const productos = [
    { nombre: "The Legend of Zelda", precio: 60, categoria: "Aventura", stock: 15 },
    { nombre: "FIFA 24", precio: 70, categoria: "Deportes", stock: 0 },
    { nombre: "Minecraft", precio: 30, categoria: "Construcción", stock: 20 },
    { nombre: "Elden Ring", precio: 50, categoria: "RPG", stock: 5 },
    { nombre: "Stardew Valley", precio: 15, categoria: "Simulación", stock: 10 }
];


function obtenerDisponibles(prmObj){
    return prmObj.filter(item => item.stock > 0);
    //el codigo va a filtrar los productos
}
const productosConStock = obtenerDisponibles(productos);

//Se imprime la variable en la consola
console.log(productosConStock);

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


const productoTotal = productosConStock.reduce((acumulador,Item) => {
    acumulador += Item.precio;

    return acumulador;
}, 0);

console.log(productoTotal)

const ordenados = productos.toSorted((a,b) => {
       if(a > b){
        return 1;
    }else{
        return -1;
    }
});

console.log(ordenados)

