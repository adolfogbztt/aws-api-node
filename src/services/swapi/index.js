const { response } = require("../../utils/response");
const { translate } = require("../../utils/translate");

module.exports.index = async (event) => {
    const res = await fetch('https://swapi.dev/api/');
    const body = await res.json();
    const Data = await translate(body, event);
    return response({ message: 'Get data success', Data, event })
}
