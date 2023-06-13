import { sha256 } from "js-sha256";
import clientPromise from "lib/mongodb";
import { tokenGen } from "lib/tokenGen";
const requestIp = require('request-ip');
import { serialize } from 'cookie';


async function GET(filter = {}, collection) {
    const user = await collection
        .findOne({
            "token": filter["token"]
        })

    if (user == null) {
        return { "success": false }
    } else {
        return { "success": true, "user": user }
    }
}

export async function createUser(res, data, ip, collection, db) {
    let token = "user_" + tokenGen();
    let hashedPass = sha256(data.password)

    let response = {
        email: data.email,
        password: hashedPass,
        status: data.status,
        "token": token,
        "ip": ip,
    }


    const user = await collection.insertOne(response)

    const expiresIn = 300 * 24 * 60 * 60 * 1000; // 300 days in milliseconds
    await res.setHeader('Set-Cookie', [
        serialize('token', token, { path: '/', maxAge: expiresIn }),
        serialize('account', true, { path: '/', maxAge: expiresIn }),
    ]);

    return token
}

async function POST(res, req, data, db, collection) {
    console.log(3)
    try {
        let ip = requestIp.getClientIp(req)

        if (await collection.findOne({ "email": data.email }) !== null) {
            return {
                "success": false,
                "statuts": "exist",
                "error": "L'email exist déja"
            }
        }
        console.log(4)

        let userToken = await createUser(res, data, ip, collection, db);
        console.log(5)
        return {
            "success": true,
            "token": userToken,
        }
    } catch (e) {
        console.log(e)
        return {
            "success": false,
            "statuts": "error",
            "error": "error"
        }
    }
}





export default async function handler(req, res) {
    try {
        console.log(1)
        const client = await clientPromise;
        const db = client.db("zaia");
        const collection = db.collection("users");
        console.log(2)
        switch (req.method) {
            case "POST": res.json(await POST(res, req, req.body, db, collection)); break
            case "GET": res.json(await GET(req.headers, collection)); break
        }

    } catch (e) {
        console.log("user error 1")
        console.error(e);
    }
}