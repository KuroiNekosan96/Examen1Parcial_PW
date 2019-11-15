const { argv } = require('./config/yargs')
const colors = require('colors')

let comando = argv._[0]
console.log(argv);

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