function fetchRecetas() {
    console.log("Iniciando Rutina...");
    console.log("Obteniendo datos...");

    fetch("https://dummyjson.com/recipes")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const recetasThai = data.recipes.filter(receta => receta.cuisine === "Thai");
            const recetasFiltradas = recetasThai.filter(receta =>
                receta.ingredients.includes("Coconut milk")
            );
            console.log("Recetas filtradas:");
            console.log(recetasFiltradas);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}
fetchRecetas();