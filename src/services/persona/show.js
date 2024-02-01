const { response } = require("../../utils/response")

module.exports.show = async (event) => {
    return response({ message: 'this work to show', event })
}
