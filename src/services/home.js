const { response } = require("../utils/response")

const handler = async (event) => {
    return response({ message: 'welcome to api', event })
}

module.exports = { handler }