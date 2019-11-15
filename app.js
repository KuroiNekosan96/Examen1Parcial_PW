const { argv } = require('./config/yargs')


let comando = argv._[0]
console.log(argv);

switch (comando) {
    case 'mostrar':
        buscarDato(argv.file, argv.anio, argv.pais)

        break;
    case 'guardar':

        crearArchivo(argv.file, argv.pais, argv.anio)
            .then(archivo => console.log(`Archivo creado: ${archivo}.green`))
            .catch(e => console.log(e.red));

        break;
    default:
        console.log("comando no valido!");
}