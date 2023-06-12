import { sha256 } from "js-sha256";
import clientPromise from "lib/mongodb";
import { tokenGen } from "lib/tokenGen";
import { logUser } from "lib/utils";
const requestIp = require('request-ip');



async function POST(res, req, db, data, collection) {

    const email = data.email;
    const hashedPass = sha256(data.password)

    const user = await collection.findOne({ email: email, password: hashedPass });
    if (user == null) { return { "success": false, "error": "No user found with this email and password" } }

    await logUser(res, db, email);


    return {
        success: true,
        user: user,
    }

}



export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("zaia");
        const collection = db.collection("users");


        switch (req.method) {
            case "POST": res.json(await POST(res, req, db, req.body, collection)); break
        }

    } catch (e) {
        console.error(e);
    }
}