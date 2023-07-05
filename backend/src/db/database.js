import mysql from "promise-mysql"; /* Conexion asincrona a la base de datos */
import config from "../config.js";

const connection = mysql.createConnection({ /* variables de entorno */
    host: config.host,
    database: config.database,
    user: config.usuario,
    password: config.password
});

const getConnection = () => {
    return connection;
}

export default getConnection;