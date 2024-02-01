const TABLE = 'PersonasTable'
const AWS = require("aws-sdk");

const { response } = require("../../utils/response")
const { validation } = require("./validation");

module.exports.update = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const data = JSON.parse(event.body);
    const valid = validation(data);
    if (!!valid.error) return response({ message: valid.error, event }, 400)

    const actualizado = new Date().toISOString();
    const { nombre, altura, peso, cabello_color, piel_color, ojos_color, ano_nacimiento, genero, planeta_natal, peliculas, especies, vehiculos, naves_estelares, link } = data

    const params = {
        TableName: TABLE,
        Key: { id },
        UpdateExpression: 'set nombre = :nombre, altura = :altura, peso = :peso, cabello_color = :cabello_color, piel_color = :piel_color, ojos_color = :ojos_color, ano_nacimiento = :ano_nacimiento, genero = :genero, planeta_natal = :planeta_natal, peliculas = :peliculas, especies = :especies, vehiculos = :vehiculos, naves_estelares = :naves_estelares, link = :link, actualizado = :actualizado',
        ExpressionAttributeValues: {
            ':nombre': nombre,
            ':altura': altura,
            ':peso': peso,
            ':cabello_color': cabello_color,
            ':piel_color': piel_color,
            ':ojos_color': ojos_color,
            ':ano_nacimiento': ano_nacimiento,
            ':genero': genero,
            ':planeta_natal': planeta_natal,
            ':peliculas': peliculas,
            ':especies': especies,
            ':vehiculos': vehiculos,
            ':naves_estelares': naves_estelares,
            ':link': link,
            ':actualizado': actualizado,
        },
        ReturnValues: "ALL_NEW",
    };

    try {
        const { Attributes: Persona } = await dynamodb.update(params).promise();
        return response({ message: 'Update success', Persona })

    } catch (error) {

        return response({ message: 'Update error', error, event }, 400)
    }

}
