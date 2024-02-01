
const TABLE = 'PersonasTable'
const AWS = require("aws-sdk");

const { response } = require("../../utils/response")

module.exports.remove = async (event) => {

    try {

        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const { id } = event.pathParameters;

        const result = await dynamodb.delete({
            TableName: TABLE,
            Key: {
                id: id
            }
        }).promise();

        const Persona = result.Item;

        return response({ message: 'Remove success', Persona, event })

    } catch (error) {
        return response({ message: 'Remove error', error, event })
    }





}
