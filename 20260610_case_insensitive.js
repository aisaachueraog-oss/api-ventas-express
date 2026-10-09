function censuraTexto(txt,censorship) {
    // Clono el texto original y lo paso a minúsculas
    const normalizado = txt.trim().toLowerCase();

    // Recorre la lista de palabras censuradas
    censorship.forEach(palabra => {
        // Busca las palabras minúsculas y obtiene su posición dentro del texto
        let pos = normalizado.indexOf(palabra.toLowerCase());
        // Comprueba si se encontró la palabra 
        while (pos !== -1) {
            const asteriscos = '*'.repeat(palabra.length);
            txt = txt.substring(0,pos) + asteriscos + txt.substring(pos + asteriscos.length); 
            pos = normalizado.indexOf(palabra.toLowerCase(),pos + palabra.length);
        }
    });

    // Retorno del resultado
    return txt;
}

// Lista de palabras a censurar.
const listado = ['tonto','libertad','capital','onomatopeyas'];
// Texto original
const texto = "JM no es un Tonto, porque quiere LIBERTAD y le gustan las onomatopeyas tonto y libertad";
// Muestro en pantalla
console.log(censuraTexto(texto,listado));