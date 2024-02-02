const { default: axios } = require("axios");
const { response } = require("../../utils/response");
const { translate } = require("../../utils/translate");

module.exports.model = async (event) => {
    const { model } = event.pathParameters;
    const { data: body } = await axios.get(`https://swapi.dev/api/${model}?${event.rawQueryString}`);
    // const { data: body } = await axios.get(`https://swapi.dev/api/?${event.rawQueryString}`);
    const Data = await translate(body, event);
    return response({ message: 'Get data success', Data })
}
