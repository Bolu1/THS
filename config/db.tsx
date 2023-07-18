import { Client } from "pg";

export const createConnection = ():Client  =>{
    const client = new Client({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 5432,
      });
      console.log(process.env.DB_HOST)
      return client

}