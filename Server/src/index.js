const http = require("http");
const getCharacterById = require("./controllers/getCharacterById");
const PORT = 3001;

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes("/rickandmorty/character")) {
        const id = req.url.split('/').pop();
        getCharacterById(res, id);
    }
    
}).listen(PORT, "localhost");

