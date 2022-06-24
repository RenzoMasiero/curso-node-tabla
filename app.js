

//const { argv, option } = require('yargs');
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
//console.log( argv );

//console.log('yargs base:',argv.base);

//console.log('listar', argv.l);
//const base = 2;

crearArchivo(argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log(`${nombreArchivo.rainbow} creado`))
    .catch( err => console.log(err));

//const [ , , arg3 = 'base=1'] = process.argv;
//const [ , base ] = arg3.split('=');
//console.log(base); 



//const base = 2;

//crearArchivo(base)
//    .then( nombreArchivo => console.log(`${nombreArchivo} creado`))
//    .catch( err => console.log(err));
