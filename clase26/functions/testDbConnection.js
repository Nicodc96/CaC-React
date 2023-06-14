import db from '../db/db.js';

export const testConnection = async () => {
    try{
        await db.authenticate();
        console.log("Se ha conectado correctamente a la DB.");
    } catch(error){
        console.log(`Error, no se ha podido conectar a la base de datos.\nRazón: ${error}`);
        return Promise.reject(error);
    }
}