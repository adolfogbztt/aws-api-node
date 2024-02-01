const AWS = require("aws-sdk");
const objetos = require('./body.js');

function modificarClaves(objeto, EN_ES) {
    // Verifica si el objeto es un array
    if (Array.isArray(objeto)) {
        // Si es un array, mapea sus elementos y llama a modificarClaves para cada uno de ellos
        return objeto.map(item => modificarClaves(item, EN_ES));
    } else if (typeof objeto === 'object' && objeto !== null) {
        // Si el objeto es un objeto (pero no un array ni null), procesa sus claves
        const nuevoObjeto = {};
        for (let key in objeto) {
            if (objeto.hasOwnProperty(key)) {
                // Verifica si la clave existe en el array de traducciones EN_ES
                const traduccion = EN_ES[key] || key;
                // Asigna la traducción como la nueva clave y llama recursivamente a modificarClaves para el valor
                nuevoObjeto[traduccion] = modificarClaves(objeto[key], EN_ES);
            }
        }
        return nuevoObjeto;
    } else {
        // Si el objeto es de otro tipo (como string, número, booleano, etc.), devuélvelo sin modificar
        return objeto;
    }
}

function obtenerTodasLasKeys(objeto) {
    const keys = [];

    function obtenerKeysRecursivamente(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // console.log(`output-typeof obj[key]`,typeof obj[key],key)

                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    // Llamada recursiva si la propiedad es un objeto
                    keys.push(key); //insertar la key de los arrays
                    obtenerKeysRecursivamente(obj[key]);
                } else {
                    // verificar si el string no es un numero
                    if (isNaN(key))
                        keys.push(key);
                }
            }
        }
    }

    obtenerKeysRecursivamente(objeto);
    console.log(`output-keys`, keys)
    // Eliminar duplicados usando un Set y luego convertirlo de nuevo a un array
    return [...new Set(keys)];
}

function limpiarPisos(array) {
    return array.map((v) => v.replaceAll('_', ' '));
}

function agregarPisos(array) {
    return array.map((v) => v.replaceAll(' ', '_'));
}

const removeAccentsAndSpecialChars = (str) => {
    // Reemplaza los acentos y caracteres especiales con sus equivalentes sin acentos
    str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Elimina los caracteres especiales excepto las comas (todo lo que no sea letra, número o coma)
    str = str.replace(/[^a-zA-Z0-9, ]/g, '');
    return str;
};

const traducirClaves = async (array_claves) => {
    try {
        const string_keys_english = array_claves.join(', ');
        // console.log({ string_keys_english })
        return translatePromise(string_keys_english);

    } catch (error) {
        console.error("Ocurrió un error al traducir:", error);
    }
}

const translatePromise = (text) => {

    AWS.config.update({ region: "us-east-1" });
    const translate = new AWS.Translate();

    const params = {
        SourceLanguageCode: 'en',
        TargetLanguageCode: 'es',
        Text: text
    };


    return new Promise((resolve, rej) => {
        translate.translateText(params, function (err, data) {
            if (err) {
                resolve(err)
            } else {
                resolve(data.TranslatedText)
            }
        });
    });

}

const replaceOriginalLink = (body, url = 'http://localhost:8000') => {
    let res = JSON.stringify(body)
    res = res.replaceAll('https://swapi.dev/api', `${url}/swapi`);
    res = JSON.parse(res);

    return res;

}

(async () => {
    const todasLasClaves = obtenerTodasLasKeys(objetos).filter(v => isNaN(v));
    const todasLasClavesClear = limpiarPisos(todasLasClaves);

    console.log(`output->`, todasLasClavesClear)
    const clavesTraducidas = await traducirClaves(todasLasClavesClear);
    const stringSinCaracteresEspeciales = removeAccentsAndSpecialChars(clavesTraducidas);
    const arrayClavesTraducidas = agregarPisos(stringSinCaracteresEspeciales.split(", "))

    const objEN_ES = {}

    console.log(`output->`, todasLasClaves, todasLasClaves[`length`]);
    console.log(`output->`, arrayClavesTraducidas, todasLasClaves['length']);

    for (let i = 0; i < todasLasClaves.length; i++) {

        console.log(todasLasClaves[i], arrayClavesTraducidas[i]);
        
        objEN_ES[todasLasClaves[i]] = arrayClavesTraducidas[i];
    }

    const objetoTraducido = modificarClaves(objetos, objEN_ES)

    const objetoUrlPersonalizada = replaceOriginalLink(objetoTraducido)
    console.log(`output-objetoTraducido`, objetoUrlPersonalizada);
})()



// (async () => {
//     const traduccion = await translatePromise('hi, my name is Adolfo, how are you today');
//     console.log({ traduccion });
// })()


// console.log(todasLasClaves);