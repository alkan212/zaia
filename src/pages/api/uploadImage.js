import { Storage } from "@google-cloud/storage";


const storage = new Storage({
    keyFilename: "./keys/cloudKey.json", // Update the path according to your project structure
});

const bucketName = "zaia21";

export const uploadImage = async (filename, base64) => {
    console.log("UPLOADING")
    const bucket = storage.bucket(bucketName);
    const file = bucket.file(filename);

    const options = {
        public: true,
        contentType: "image/jpeg",
    };

    let buffer = Buffer.from(base64, "base64")
    await file.save(buffer, options);
    console.log("File uploaded successfully : ", file.publicUrl())
    return file.publicUrl();
};


export default async function handler(req, res) {
    try {
        console.log("UPLOAD")
        let imageToken = req.body.imageToken;
        let url = await uploadImage(`${imageToken}.jpg`, req.body.image)
        console.log("UPLOADED")
        res.json({ success: true, url:url });
        // console.log(req.body)

    } catch (e) {
        console.log("user error 1")
        console.error(e);
    }
}



export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb' // Set desired value here
        }
    }
}