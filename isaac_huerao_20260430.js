(function (name) {
    console.log('bienvenido,')

    const nombre_completo = process.argv[2];
    console.log(nombre_completo);

    const nombre = nombre_completo.split(' ');
    console.log(nombre)

    let objeto = {
        nombre : nombre[0],
        apellido : nombre[1]
    }
    console.log(objeto)
})();