<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Usage

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).


# Documentación de Uso de la API REST

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

## Deployment

```
$ serverless deploy
```


Después de la implementación, debería ver un resultado similar al siguiente:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: ws-node-http-api-project (1.9 kB)
```



## Base URL
La URL base de la API es: `https://xxxxxxx.execute-api.us-east-1.amazonaws.com/`


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
Host: https://xxxxxxx.execute-api.us-east-1.amazonaws.com

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
            "link": "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/persona/1",
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
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/1/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/2/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/3/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/4/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/5/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/6/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/7/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/8/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/9/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/10/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/12/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/13/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/14/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/15/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/16/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/18/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/19/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/people/81/"
        ],
        "planetas": [
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/planets/1/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/planets/2/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/planets/3/"
        ],
        "naves_espaciales": [
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/2/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/3/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/5/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/9/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/10/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/11/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/12/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/starships/13/"
        ],
        "vehiculos": [
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/vehicles/4/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/vehicles/6/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/vehicles/7/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/vehicles/8/"
        ],
        "especies": [
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/species/1/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/species/2/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/species/3/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/species/4/",
            "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/species/5/"
        ],
        "creado": "2014-12-10T14:23:31.880000Z",
        "editado": "2014-12-20T19:49:45.256000Z",
        "URL": "https://xxxxxxx.execute-api.us-east-1.amazonaws.com/swapi/films/1/"
    }
}

```

## Errores

#### La API puede devolver los siguientes códigos de estado HTTP en caso de errores:

- `400 Bad Request`: La solicitud no es válida.
- `404 Not Found`: El recurso solicitado no fue encontrado.
- `500 Internal Server Error`: Error interno del servidor.

#### Para más detalles sobre el uso de cada endpoint y los parámetros aceptados, consulta la documentación específica de cada recurso.
