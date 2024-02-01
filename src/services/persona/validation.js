/**
 * 
 * @param {JSON} data
*/
module.exports.validation = (data) => {
    const acceptedKeys = [
        'nombre',
        'altura',
        'peso',
        'cabello_color',
        'piel_color',
        'ojos_color',
        'ano_nacimiento',
        'genero',
        'planeta_natal',
        'peliculas',
        'especies',
        'vehiculos',
        'naves_estelares',
        'link',
    ];

    try {
        // Filtrar solo las propiedades aceptadas
        const newData = Object.keys(data)
            .filter(key => acceptedKeys.includes(key))
            .reduce((obj, key) => {

                if (key === 'naves_estelares' && !Array.isArray(data[key])) {
                    throw new Error('naves_estelares debe ser un array');
                }

                if (key === 'vehiculos' && !Array.isArray(data[key])) {
                    throw new Error('vehiculos debe ser un array');
                }

                if (key === 'especies' && !Array.isArray(data[key])) {
                    throw new Error('vehiculos debe ser un array');
                }

                if (key === 'pelicula' && !Array.isArray(data[key])) {
                    throw new Error('vehiculos debe ser un array');
                }

                obj[key] = data[key];
                return obj;
            }, {});

        if (Object.keys(newData).length !== acceptedKeys.length) {
            throw new Error('No se proporcionaron todas las propiedades requeridas');
        }

        return newData;
    } catch (error) {
        return { error: error.message };
    }
};