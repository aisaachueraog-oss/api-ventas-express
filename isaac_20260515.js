// Sistema de Gestión de Notas Escolares
// Este script procesa las calificaciones de un curso para obtener estadísticas.

const estudiantes = [
  { nombre: "Ana", notas: [6.5, 7.0, 5.8, 6.2] },
  { nombre: "Pedro", notas: [4.0, 3.5, 5.0, 4.2] },
  { nombre: "María", notas: [6.8, 6.9, 7.0, 6.7] },
  { nombre: "Juan", notas: [3.2, 4.5, 2.8, 3.9] },
  { nombre: "Sofía", notas: [5.5, 6.0, 5.2, 5.8] },
  { nombre: "Lucas", notas: [4.5, 5.0, 4.8, 5.1] }
];

// 1. Función para calcular el promedio de un arreglo de notas usando reduce
const calcularPromedio = (notas) => {
  const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = suma / notas.length;
  return Number(promedio.toFixed(1)); // Redondea a un decimal
};
console.log(estudiantes);

// 2. Procesar la lista para agregar el promedio a cada estudiante
const estudiantesConPromedio = estudiantes.map((estudiante) => {
  return {
    nombre: estudiante.nombre,
    notas: estudiante.notas,
    promedio: calcularPromedio(estudiante.notas)
  };
});

console.log("--- Lista de Estudiantes con sus Promedios ---");
console.log(estudiantesConPromedio);

// 3. Filtrar estudiantes aprobados (promedio mayor o igual a 4.0)
const aprobados = estudiantesConPromedio.filter((estudiante) => estudiante.promedio >= 4.0);

// 4. Filtrar estudiantes que necesitan reforzamiento (promedio menor a 4.0)
const necesitanReforzamiento = estudiantesConPromedio.filter(estudiante => estudiante.promedio < 4.0);

console.log("\n--- Estudiantes que necesitan reforzamiento ---");
if (necesitanReforzamiento.length === 0) {
  console.log("¡Ninguno! Todo el curso está aprobado.");
} else {
  // Error FÁCIL introducido en la siguiente línea:
  necesitanReforzamiento.forEach(est => console.log(`- ${est.nombre} Promedio: ${est.promedio}`));
}

// 5. Ordenar el curso de mayor a menor promedio usando toSorted
// Queremos ver quiénes tienen las notas más altas
const cursoOrdenado = estudiantesConPromedio.toSorted((a, b) => b.promedio - a.promedio);

console.log("\n--- Ranking del Curso (Mayor a Menor Promedio) ---");
cursoOrdenado.forEach((estudiante, indice) => {
  console.log(`${indice + 1}. ${estudiante.nombre}: ${estudiante.promedio}`);
});

// 6. Obtener la nota más alta de todo el curso usando reduce y Math.max
const todasLasNotas = estudiantes.flatMap((estudiante) => estudiante.notas); 
// Nota: flatMap es equivalente a mapear y aplanar, si no lo han visto, 
// se puede ver como una forma de juntar todas las notas en un solo gran arreglo.

// Error DIFÍCIL introducido en la siguiente función flecha:
const notaMaxima = todasLasNotas.reduce((max, nota) => {
  return nota > max ? nota : max;
},0);

console.log(`\nLa nota más alta registrada en el curso fue: ${notaMaxima}`);

// 7. Resumen estadístico final
const sumaDePromedios = estudiantesConPromedio.reduce((acc, est) => acc + est.promedio, 0);
const promedioGeneralCurso = Number((sumaDePromedios / estudiantesConPromedio.length).toFixed(1));

console.log("\n--- Resumen Final ---");
console.log(`Cantidad total de alumnos: ${estudiantes.length}`);
console.log(`Alumnos aprobados: ${aprobados.length}`);
console.log(`Promedio general del curso: ${promedioGeneralCurso}`);