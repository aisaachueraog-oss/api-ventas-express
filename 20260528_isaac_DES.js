/*
    NO EDITAR EL SIGUIENTE CÓDIGO
*/
// Listas de nombres y apellidos para generar combinaciones aleatorias
const nombres = ['Diego', 'Valentina', 'Mateo', 'Sofía', 'Lucas', 'Bastián', 'Martina', 'Benjamín', 'Florencia', 'Alonso', 'Isidora', 'Tomás', 'Camila', 'Joaquín', 'Antonella', 'Maximiliano', 'Catalina', 'Matías', 'Emilia', 'Nicolás'];
const apellidos = ['González', 'Muñoz', 'Rojas', 'Díaz', 'Pérez', 'Soto', 'Contreras', 'Silva', 'Martínez', 'Sepúlveda', 'Morales', 'Rodríguez', 'López', 'Fuentes', 'Hernández', 'Torres', 'Araya', 'Flores', 'Espinoza', 'Valenzuela'];

// Función auxiliar para obtener un elemento aleatorio de un array
const obtenerAleatorio = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Función auxiliar para generar una fecha aleatoria (ej: alumnos entre 15 y 18 años)
const generarFechaAleatoria = () => {
    const añoActual = new Date().getFullYear();
    const añoMin = añoActual - 18;
    const añoMax = añoActual - 15;
    const año = Math.floor(Math.random() * (añoMax - añoMin + 1)) + añoMin;
    const mes = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const dia = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // Evitamos problemas con febreros
    return `${año}-${mes}-${dia}`;
};

// Función auxiliar para generar 5 notas aleatorias (del 1.0 al 7.0, con un decimal)
const generarNotas = () => {
    return Array.from({ length: 5 }, () => {
        // Genera un número entre 10 y 70 y lo divide por 10 para simular la escala chilena/tradicional
        const nota = (Math.floor(Math.random() * (70 - 10 + 1)) + 10) / 10;
        return nota;
    });
};

// Generación del arreglo principal con 1000 elementos
const alumnos = Array.from({ length: 1000 }, () => {
    return {
        nombre_alumno: obtenerAleatorio(nombres),
        apellido_alumno: obtenerAleatorio(apellidos),
        fecha_nacimiento: generarFechaAleatoria(),
        notas: generarNotas(),
        segmento: obtenerAleatorio(['TP', 'HC']),
        confirma: Math.random() < 0.5
    };
});

/*
    *** EDITAR DESDE AQUÍ ***

    En el arreglo alumnos hay 1000 alumnos con la siguiente estructura:
    {
        nombre_alumno : 'nombre',
        apellido_alumno : 'apellido',
        fecha_nacimiento : '2000-01-01',
        notas : [1.0, 5.8, 7,0],
        segmento : 'TP' o 'HC',
        confirma : booleano
    }


    1. Cree un nuevo objeto para separar los alumnos de HC y los de TP. Ejemplo:
    const especialidad = {
        hc : [
            {...},
            {...},
            {...}
        ],
        tp : [
            {...},
            {...},
            {...}
        ]
    }

    Escriba su código a continuación:
*/
const especialidad = {
    hc: alumnos.filter(alumno => alumno.segmento === 'HC'),
    tp: alumnos.filter(alumno => alumno.segmento === 'TP')
};
console.log(especialidad);






/*
    2. Usando el nuevo objeto especialidad donde ya están ordenados los alumnos,
    calcula el promedio de notas de ambas especialidades y muéstrelos por pantalla.

    Escriba su código a continuación:

*/




