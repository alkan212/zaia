import clientPromise from "lib/mongodb";


export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = await client.db("zaia");
        const collection = await db.collection("stores");

        const userToken = req.body.userToken;
        const storeName = req.body.storeName;

        let store = await collection.deleteOne({name:storeName, user:userToken});

        if(store == null){res.json({success:false})}

        res.json({ success: true })

    } catch (e) {
        console.error(e);
    }
}