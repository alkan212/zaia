import clientPromise from "lib/mongodb";


const defaultStoreData = {
    current: {
        sales: 1,
        vistors: 5,
        revenue: 10,
        convertionRate: (1 / 5) * 100,
    },

    last: {
        sales: [10, 10, 10, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
        visitors: [200, 200, 200, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30],
        revenue: [100, 100, 100, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20],
        convertionRate: [2, 2, 2, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3],
    },

    total: {
        sales: 3,
        visitors: 121,
        revenue: 30,
    },

    online: true,
}


export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = await client.db("zaia");
        const collection = await db.collection("stores");

        let isExist = await verifyIsNameExist(req.body.storeName, collection)
        
        if(isExist == false){
            let storeName = req.body.storeName;
            let storeData = req.body.storeData;
            let storeType = req.body.storeType;
            let userToken = req.body.userToken;

            await collection.insertOne({
                "name": storeName,
                "data": storeData,
                "type": storeType,
                "user": userToken,
                ...defaultStoreData
            })

            res.json({ success: true })
        }else{
            res.json({ success: false, error: "This name is already taken" })
        }

    } catch (e) {
        console.error(e);
    }
}


async function verifyIsNameExist(name, collection) {
    let store = await collection.findOne({ name: name });
    console.log("store : ", store)
    if(store == null){
        return false
    }else{
        return true
    }
}