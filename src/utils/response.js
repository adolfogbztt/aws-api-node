/**
 * 
 * @param {JSON} content
 * @param {number} code

*/
const response = (content, code = 200) => {
    return {
        statusCode: code,
        body: JSON.stringify(
            content,
            null,
            2
        ),
    };
}
module.exports = { response }