import express from "express";

const app = express();
const PORT = 3555;

app.get("/", (req, res) => {
    res.header("Content-Type", "text/html");
    res.send("<h1>Probando con express.js</h1><br><h2>Ahora con Nodemon.js</h2>");
});

app.get("/info", (req, res) => {
    res.header("Content-Type", "text/html");
    res.send("<h1>Acá va el contenido de informacion</h1>");
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));