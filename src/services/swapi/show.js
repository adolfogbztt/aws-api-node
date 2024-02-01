const { response } = require("../../utils/response");
const { translate } = require("../../utils/translate");


module.exports.show = async (event) => {
    const { model, id } = event.pathParameters;
    const res = await fetch(`https://swapi.dev/api/${model}/${id}?${event.rawQueryString}`);
    const body = await res.json();
    const Data = await translate(body, event);
    return response({ message: 'Get data success', Data })
}
