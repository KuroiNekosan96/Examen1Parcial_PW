let opt = {
    archivo: {
        demand: true,
        alias: 'f',
        description: 'Archivo CSV con datos a procesar'
    },
    anio: {
        alias: 'y',
        default: 4,
        description: 'Año que del que se busca información '
    },
    pais: {
        alias: 'c',
        default: 10,
        description: 'Código del país que se requiere información'
    }

}

const argv = require('yargs')
    .command('crear', 'crea un archivo con la tabla de multiplicar', opt)
    .command('listar', 'lista un archivo con la tabla de multiplicar', opt)
    .command('listar', 'lista un archivo con la tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
};