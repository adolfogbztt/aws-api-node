const { translate } = require("../src/utils/translate");

describe('translate', () => {
    it('debería traducir las claves del objeto y reemplazar el enlace original', async () => {

        const body = {
            people: "https://swapi.dev/api/people/",
            planets: "https://swapi.dev/api/planets/",
            films: "https://swapi.dev/api/films/",
            species: "https://swapi.dev/api/species/",
            vehicles: "https://swapi.dev/api/vehicles/",
            starships: "https://swapi.dev/api/starships/"
        }

        const event = {
            requestContext: {
                domainName: 'http://example.com'
            }
        };

        const translatedObject = await translate(body, event);

        expect(translatedObject).toEqual({
            personas: "http://example.com/swapi/people/",
            planetas: "http://example.com/swapi/planets/",
            peliculas: "http://example.com/swapi/films/",
            especies: "http://example.com/swapi/species/",
            vehiculos: "http://example.com/swapi/vehicles/",
            naves_espaciales: "http://example.com/swapi/starships/"
        });
    });

});