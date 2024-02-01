const { response } = require("../../utils/response");
const { translate } = require("../../utils/translate");


module.exports.model = async (event) => {
    const { model } = event.pathParameters;
    const res = await fetch(`https://swapi.dev/api/${model}`);
    const body = await res.json();
    const Data = await translate(body, event);
    return response({ message: 'Get data success', Data, event })
}
