import clientPromise from "lib/mongodb";



export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = await client.db("zaia");
        const collection = await db.collection("stores");

        let storeName = req.body.storeName;
        let userToken = req.body.userToken;
        let storeData = req.body.storeData;

        console.log(req.body.storeData.informations[0])
        console.log(storeName)
        console.log(userToken)

        await collection.updateOne({ name: storeName, user: userToken }, { $set: { data: storeData }})

        res.json({ success: true })

    } catch (e) {
        console.error(e);
    }
}