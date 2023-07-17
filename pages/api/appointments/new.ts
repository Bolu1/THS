import nc from "next-connect";
import { Client } from "pg";
import { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "../../../config/db";
import { ICreateAppointment } from "../../../Interface/provider.interface";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    
    const client = createConnection();
    client.connect();
    const payload:ICreateAppointment = req.body
    if(!payload.provider_id || !payload.duration || !payload.reminder_email || !payload.timestamp || !payload.availability_id){

      return res.status(400).json({
        "status": "Error",
        "message": "All fields are required",
    });
    }
    // insert into appointment db
    await client.query(
        `
        INSERT INTO appointments (provider_id, duration, reminder_email, timestamp)
        VALUES
        (${payload.provider_id},' ${payload.duration}', '${payload.reminder_email}', '${payload.timestamp}');
        `
    );
    // update availability
    await client.query(
      `
      UPDATE availability SET is_available = false WHERE id = '${payload.availability_id}'
      `
    )

    client.end();
    return res.status(200).json({
        "status": "Succcess",
        "message": "Appointment created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        "status": "Error",
        "message": "Appointment was not created",
    });
  }
});

export default handler;
