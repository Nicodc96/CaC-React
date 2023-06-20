import express from "express";
import cors from "cors";
import { testConnection } from './functions/testDbConnection.js';
import postRouter from './routes/postRouter.js';

const app = express();
const PORT = 3535;

app.use(cors());
app.use(express.json());

app.use("/posts", postRouter);

testConnection()
.then(() => {
    app.listen(PORT, () => console.log(`Servidor ejecutándose en la URL: http://localhost:${PORT}/`));
})
.catch((error) => {
    console.log(`No se ha podido ejecutar el servidor debido a un error en la conexión a la DB.\nMensaje: ${error}`);
});

