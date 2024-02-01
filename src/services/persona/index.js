const AWS = require("aws-sdk");
const TABLE = 'PersonasTable'

const { response } = require("../../utils/response")

module.exports.index = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({
        TableName: TABLE,
    }).promise();

    const Personas = result.Items;

    return response({ message: 'Get personas success', Personas, event })
}
