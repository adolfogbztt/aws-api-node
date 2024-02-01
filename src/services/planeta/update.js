const { response } = require("../../utils/response")

module.exports.update = async (event) => {
    return response({ message: 'this work to update', event })
}
