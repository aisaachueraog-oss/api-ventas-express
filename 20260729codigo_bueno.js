fetch("https://dummyjson.com/recipes")
.then(respuesta => {
    console.log("PRIMER MENSAJE");

    return respuesta.json();
})
.then(objeto => {
    console.log(objeto);

    const recetas = objeto.recipes;
    let mostrar = [];
    const thai = recetas.filter(r => r.cuisine == "Thai");

    mostrar = thai;

    if (thai.length > 3) {
        mostrar = recetas.filter(r => r.mealType.includes("Lunch"));

        console.log(mostrar);
    }
    console.log("SEGUNDO MENSAJE");
    console.log("ULTIMO MENSAJE");
});