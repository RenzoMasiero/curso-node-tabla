
const fs = require ( 'fs');
const colors = require('colors');

const crearArchivo = async ( base = 5 , listar = false, hasta = 10) => {

    try{
        let salida = '';
        let salidaConsola = '';

        for( let i =1 ; i<=hasta ; i++) {
            salidaConsola += (`${base} ${'x'.green} ${i} ${'='.blue} ${ base * i }\n`);
            salida += (`${base} x ${i} = ${ base * i }\n`);
        }

        if(listar){
            console.log('========================='.green)
            console.log(`=======TABLA DEL ${base}=======`)
            console.log('========================='.green)
            console.log(salidaConsola);
        }
   
        fs.writeFileSync(`./salida/TABLA-${base}.txt`, salida );

        return `TABLA-${base}.txt`
    }
    catch(error){
        throw(error);
    }

    
}


module.exports = {
    crearArchivo
}