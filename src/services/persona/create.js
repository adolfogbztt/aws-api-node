const { response } = require("../../utils/response")

module.exports.create = async (event) => {
    return response({ message: 'this work to create', event })
}
