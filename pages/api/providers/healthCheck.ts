import nc from "next-connect";
import { Pool } from "pg";
import { NextApiRequest, NextApiResponse } from "next";

const handler = nc();

let connection: Pool;

if (!connection) {
  connection = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 5432,
    max: 20,
    connectionTimeoutMillis: 0,
    idleTimeoutMillis: 0,
    allowExitOnIdle: true,
  });
}

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const query = await connection.query("SELECT * FROM providers");
    console.log(query);
    return res.status(200).json({
        "status": "Succcess",
        "message": "Healthy"
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

export default handler;
