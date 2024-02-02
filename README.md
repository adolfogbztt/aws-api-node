
![Serverless Framework](https://blog.logicwind.com/content/images/size/w2000/2020/04/Serverless-1-862x492.png)

# Documentación de uso de la API REST

## Introducción
Bienvenido a la documentación de uso de la API REST. Esta API proporciona acceso a recursos relacionados con la integracion de SWAPI la API que brinda informacion del universo de Star Wars.


## Requisitos
Es necesario contar con Serverless Framework With AWS

```
$ npm install -g serverless
```

## Development
Instale los paquetes necesario para el desarrollo de esta API

```
$ npm i
```

## Nombre de las Politicas requeridas AWS 

```
📦 AdministratorAccess
📦 AmazonAPIGatewayAdministrator
📦 AmazonDynamoDBFullAccess
📦 AWSLambda_FullAccess
📦 TranslateFullAccess
```

## Deployment

```
$ serverless deploy
```



Después de la implementación, debería ver un resultado similar al siguiente:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/
functions:
  hello: ws-node-http-api-project (1.9 kB)
```

## Unit Test

```
$ npm test
```



## Base URL
La URL base de la API es: `https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/`

## Swagger REST API
La URL Swagger de la API es: `https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swagger`


## Recursos Disponibles

### Persona

#### Endpoints

- `GET /persona`: Obtiene una lista de todas las personas.
- `GET /persona/{id}`: Obtiene los detalles de una persona específica.
- `POST /persona`: Crea una nueva persona.
- `PUT /persona/{id}`: Actualiza los detalles de una persona existente.
- `DELETE /persona/{id}`: Elimina una persona existente.


#### Ejemplo de Uso

```http
POST /persona HTTP/1.1
Host: https://4f3248cvmd.execute-api.us-east-1.amazonaws.com

{
    "message": "Get personas success",
    "Personas": [
        {
            "planeta_natal": "Tatooine",
            "nombre": "Luke Skywalker 3333",
            "ojos_color": "azul",
            "cabello_color": "rubio",
            "vehiculos": [
                "X-34 landspeeder"
            ],
            "altura": 172,
            "creacion": "2024-02-01T22:24:26.973Z",
            "peso": 77,
            "peliculas": [
                1,
                2,
                3
            ],
            "naves_estelares": [
                "X-wing"
            ],
            "piel_color": "blanco",
            "ano_nacimiento": 19,
            "link": "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/persona/1",
            "especies": [
                "humanoide"
            ],
            "id": "c4ab4f8c-8d4b-46a2-a3b2-33714f7efee7",
            "genero": "masculino"
        }
    ]
}

```


### Swapi

#### Endpoints

- `GET /swapi`: Obtiene una lista de todos los recursos de la API Swapi.
- `GET /swapi/{model}`: Obtiene el listado de detalles de un modelo.
- `GET /swapi/{model}/{id}`: Obtiene el detalle de elemento de un modelo especifico.


#### Parámetros de consulta

- `page`: Número de página para la paginación de resultados.


#### Ejemplo de Uso

```http
POST /persona HTTP/1.1
Host: https://xxxxxxx.execute-api.us-east-1.amazonaws.com

{
    "message": "Get data success",
    "Data": {
        "titulo": "A New Hope",
        "identificador_del_episodio": 4,
        "recorrido_de_apertura": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        "director": "George Lucas",
        "productor": "Gary Kurtz, Rick McCallum",
        "fecha_de_lanzamiento": "1977-05-25",
        "personajes": [
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/1",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/2",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/3",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/4",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/5",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/6",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/7",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/8",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/9",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/10",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/12",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/13",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/14",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/15",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/16",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/18",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/19",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/people/81"
        ],
        "planetas": [
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/planets/1",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/planets/2",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/planets/3"
        ],
        "naves_espaciales": [
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/2",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/3",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/5",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/9",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/10",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/11",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/12",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/starships/13"
        ],
        "vehiculos": [
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/vehicles/4",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/vehicles/6",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/vehicles/7",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/vehicles/8"
        ],
        "especies": [
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/species/1",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/species/2",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/species/3",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/species/4",
            "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/species/5"
        ],
        "creado": "2014-12-10T14:23:31.880000Z",
        "editado": "2014-12-20T19:49:45.256000Z",
        "URL": "https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swapi/films/1"
    }
}

```

## Errores

#### La API puede devolver los siguientes códigos de estado HTTP en caso de errores:

- `400 Bad Request`: La solicitud no es válida.
- `404 Not Found`: El recurso solicitado no fue encontrado.
- `500 Internal Server Error`: Error interno del servidor.

 
## [[Para más detalles sobre el uso de cada endpoint y los parámetros aceptados, consulta la documentación en este enlace.]](https://4f3248cvmd.execute-api.us-east-1.amazonaws.com/swagger)
