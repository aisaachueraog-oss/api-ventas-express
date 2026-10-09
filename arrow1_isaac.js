const numerosAleatorios = Array.from({ length: 20 }, () => Math.floor(Math.random() * 50) + 1);

//console.log(numerosAleatorios);

/*
*** EDITAR ARCHIVO DESDE AQUI ***

Cambiar todas las funciones anónimas por Arrow Functions
*/
const numerosNuevos = numerosAleatorios.map(item => item + 13);

//console.log(numerosNuevos);

const numeros = numerosNuevos.filter(item => item <50);

//console.log(numeros);

const objNumeros = {
    pares : [],
    impares : []
};

// No Modificar el Objeto original.
function filtraNumeros(prmArr, prmObj){
    let copia = structuredClone(prmObj);

    copia.pares = prmArr.filter(item =>{ if(item % 2 === 0) return item});

    copia.impares = prmArr.filter(item =>{if(item % 2 !== 0)return item}  );
    
    return copia
} 

const resultado = filtraNumeros(numeros,objNumeros);

// Comprobación de resultado
console.log('-- OBJETO ORIGINAL --');
console.log(objNumeros);
console.log(' ');
console.log('-- OBJETO MODIFICADO --');
console.log(resultado);