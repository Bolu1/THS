import nc from "next-connect";
import { Client } from "pg";
import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "../../../config/db";

const handler = nc();


handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = createConnection();
    client.connect();
    const query = await client.query("SELECT * FROM providers");
    client.end();
    return res.status(200).json({
        "status": "Succcess",
        "message": "Healthy",
        "data": query.rows
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

export default handler;