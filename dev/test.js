const { translate } = require("../src/utils/translate");
(async () => {
    const res = await fetch(`https://swapi.dev/api/`);
    const body = await res.json();
    const event = {}
    const Data = await translate(body, event);
    console.log(`output->body`, Data);
})()