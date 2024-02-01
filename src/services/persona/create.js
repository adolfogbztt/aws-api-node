const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const TABLE = 'PersonasTable'

const { response } = require("../../utils/response");
const { validation } = require("./validation");

module.exports.create = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const data = JSON.parse(event.body);
    const valid = validation(data);

    if (!!valid.error) return response({ message: valid.error, event }, 400)

    const creacion = new Date().toISOString();
    const id = v4();

    const Persona = {
        id,
        creacion,
        ...data
    }

    try {
        await dynamodb.put({
            TableName: TABLE,
            Item: Persona
        }).promise();

        return response({ message: 'Create success', Persona })

    } catch (error) {
        return response({ message: 'Create fail', error }, 400)
    }


}
