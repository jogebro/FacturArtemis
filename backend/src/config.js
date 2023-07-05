import {config} from "dotenv"; /* lectura de las variables de entorno */

config();

export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    usuario: process.env.USUARIO,
    password: process.env.PASSWORD
}