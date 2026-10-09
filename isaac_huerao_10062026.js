const censorship = ["perra", "maraka", "puto"];

function censurar(texto) {

    for (let i = 0; i < censorship.length; i++) {
        texto = texto.replace(
            censorship[i],
            "*".repeat(censorship[i].length)
        );
    }

    return texto;
}
console.log(censurar("La perra del max no se comio toda la comida, pero para la corneta es la gran maraka y es sendo puto"));