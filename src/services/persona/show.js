const TABLE = 'PersonasTable'
const AWS = require("aws-sdk");

const { response } = require("../../utils/response")

module.exports.show = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    try {

        const { id } = event.pathParameters;

        const result = await dynamodb.get({
            TableName: TABLE,
            Key: {
                id: id
            }
        }).promise();

        const Persona = result.Item;

        return response({ message: 'Show success', Persona })

    } catch (error) {
        return response({ message: 'Show error', error, event }, 400)
    }

}
