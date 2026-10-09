const numerosAleatorios = Array.from({ length: 20 }, () => Math.floor(Math.random() * 20) + 1);

console.log(numerosAleatorios);

/*
   **** EDITAR ARCHIVO DESDE AQUÍ ****

   - En el arreglo numerosAleatorios hay 20 números aleatorios.

   - Creen una función flecha que reciba un único parámetro y 
   asignenla a la variable ordenaNumeros.
   
   - Busquen algún método de Array que DEVUELVA UN NUEVO ARREGLO
   CON LOS NÚMEROS ORDENADOS. Ojo, no modificar el arreglo original.
   Usen este método dentro de la función flecha.

   - Probablemente encuentren 2 métodos de Array que les sirven para
   ordenar. Usen el que les sirva según las instrucciones y expliquen
   con un comentario la diferencia entre un método y el otro.

   - Invoquen a la función flecha, guarden el arreglo ordenado que
   devuelva y lo imprimen por pantalla.

   - Desde aquí Cada línea que tenga una instrucción, función, método,
   declaración, etc., debe tener un comentario explicando lo que hace
   dicha línea.

    
*/


/*utilizamos el método tosorted,
 el cual ordena os elementos de una arreglo bajo el parámetro asignado,
  devolviendo un arreglo nuevo con los elementos ordenados
*/
const ordenaNumeros = numerosAleatorios.toSorted((a,b) => a-b);
// guardamos el nuevo arreglo en una variable llamada numerosOrdenados
const numerosOrdenados = ordenaNumeros
//imprimimos en pantall el nuevo arreglo
console.log(numerosOrdenados)