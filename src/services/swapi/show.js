const { default: axios } = require("axios");
const { response } = require("../../utils/response");
const { translate } = require("../../utils/translate");

module.exports.show = async (event) => {
    const { model, id } = event.pathParameters;
    const { data: body } = await axios(`https://swapi.dev/api/${model}/${id}?${event.rawQueryString}`);

    const Data = await translate(body, event);
    return response({ message: 'Get data success', Data })
}
