const eventGenerator = require('../testUtils/eventGenerator');
const validators = require('../testUtils/validador');
const { createTest: create } = require('../src/services/persona/createTest');

describe('crear persona desde tests de integracion', () => {
    it('debe tomar un body y devolver una respuesta de tipo API Gateway', async () => {
        const event = eventGenerator({
            body: {
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
            },
        });

        const res = await create(event);
        expect(res).toBeDefined();
        expect(validators.isApiGatewayResponse(res)).toBe(true);
    });

    it('debe devolver un 200 con la persona si este es valido', async () => {
        const event = eventGenerator({
            body: {
                id: '77s7a7d77777sss22',
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
            },
        });
        const res = await create(event);

        expect(res.statusCode).toBe(200);
    });



    it('debe devolver un 400 cuando un campo no es valido', async () => {
        const event = eventGenerator({
            body: {
                id: '77s7a7d77777sss22',
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
            },
        });
        const res = await create(event);
        expect(res.statusCode).toBe(400);
    });
});