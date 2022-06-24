//const { describe, argv, option } = require('yargs');

const argv = require( 'yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base para la tabla de multiplicar'
                })          
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    demandOption: false,
                    describe: 'Muestra la tabla que va a grabar'
                })          
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'hasta que numero va la tabla'
                })
                .check((argv,option)=>{
                    if(isNaN(argv.base)){
                        throw 'La Base debe ser un numero'
                    }
                    if(isNaN(argv.h)){
                        throw 'El limite debe ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;