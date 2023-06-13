import http from "http";

const PORT = 3030;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Probando h1 desde node.js</h1>");
});

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}/`));