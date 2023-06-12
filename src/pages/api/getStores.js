import clientPromise from "lib/mongodb";


export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = await client.db("zaia");
        const collection = await db.collection("stores");

        const userToken = req.body.userToken;

        let stores = await collection.find({user:userToken}).toArray();
        res.json({ success: true, stores:stores })

    } catch (e) {
        console.error(e);
    }
}