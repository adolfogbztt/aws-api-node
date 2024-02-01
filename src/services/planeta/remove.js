const { response } = require("../../utils/response")

module.exports.remove = async (event) => {
    return response({ message: 'this work to remove', event })
}
