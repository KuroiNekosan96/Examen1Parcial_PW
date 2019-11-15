let opt = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Archivo CSV con datos a procesar'
    },
    anio: {
        alias: 'y',
        default: 1960,
        description: 'Año que del que se busca información '
    },
    pais: {
        alias: 'c',
        default: "ECU",
        description: 'Código del país que se requiere información'
    }

}

const argv = require('yargs')
    .command('mostrar', 'Muestra la busqueda del archivo', opt)
    .command('guardar', 'Guarda los datos del archivo', opt)
    .help()
    .argv;

module.exports = {
    argv
};