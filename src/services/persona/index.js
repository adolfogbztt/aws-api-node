const { response } = require("../../utils/response")

module.exports.index = async (event) => {
    console.log('SUCCESS EXECUTE');
    return response({ message: 'this work to index', event })
}
