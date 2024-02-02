const { validation } = require("../src/services/persona/validation");

describe('validation function', () => {
    it('should return the same data if all properties are accepted', () => {
        const data = {
            nombre: 'Luke Skywalker',
            altura: 172,
            peso: 77,
            cabello_color: 'rubio',
            piel_color: 'blanco',
            ojos_color: 'azul',
            ano_nacimiento: 19,
            genero: 'masculino',
            planeta_natal: 'Tatooine',
            peliculas: [1, 2, 3],
            especies: ['humano'],
            vehiculos: ['X-34 landspeeder'],
            naves_estelares: ['X-wing'],
            link: 'https://swapi.py4e.com/api/people/1/',
        };

        expect(validation(data)).toEqual(data);
    });

    it('should throw an error if a property is missing', () => {
        const data = {
            altura: 172,
            peso: 77,
            cabello_color: 'rubio',
            piel_color: 'blanco',
            ojos_color: 'azul',
            ano_nacimiento: 19,
            genero: 'masculino',
            planeta_natal: 'Tatooine',
            peliculas: [1, 2, 3],
            especies: ['humano'],
            vehiculos: ['X-34 landspeeder'],
            naves_estelares: ['X-wing'],
            link: 'https://swapi.py4e.com/api/people/1/',
        };

        expect(validation(data)).toEqual({ error: 'No se proporcionaron todas las propiedades requeridas' });
    });

    it('should throw an error if naves_estelares is not an array', () => {
        const data = {
            nombre: 'Luke Skywalker',
            altura: 172,
            peso: 77,
            cabello_color: 'rubio',
            piel_color: 'blanco',
            ojos_color: 'azul',
            ano_nacimiento: 19,
            genero: 'masculino',
            planeta_natal: 'Tatooine',
            peliculas: [1, 2, 3],
            especies: ['humano'],
            vehiculos: ['X-34 landspeeder'],
            naves_estelares: 'X-wing',
            link: 'https://swapi.py4e.com/api/people/1/',
        };

        expect(validation(data)).toEqual({ error: 'naves_estelares debe ser un array' });
    });
});
