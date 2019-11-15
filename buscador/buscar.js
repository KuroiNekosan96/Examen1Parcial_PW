const fs = require('fs');

let buscarDato = (file, pais, anio) => {
    'use strict'
    const csv = require('csv-parser');
    const fs = require('fs');
    const filepath = "datos.csv"
    fs.createReadStream(filepath)
        .on('error', () => {})
        .pipe(csv())
        .on('data', (row) => {
            console.log(row);
        })
        .on('end', () => {})


}

//file = 'datos.csv'
//pais = 'ECU'
//anio = '2016'

let crearArchivo = (file, pais, anio) => {


    file = 'datos.csv'
    pais = 'ECU'
    anio = '2016'

    let data = '';
    fs.writeFile(`./resultados/${file}-${pais}-${anio}.txt`, data, (err) => { //el(err)=> es el callback
        if (err)
            reject(err);
        else
            resolve(`tabla-${j}-al-${limite}.txt`);
    })

}

module.exports = {
    crearArchivo, //si el nombre de la propieda es igual al valor se puede dejar solo con el nombre  
    buscarDato
};