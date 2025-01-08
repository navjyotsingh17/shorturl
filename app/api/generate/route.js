import clientPromise from "@/lib/mongoDB"

export async function POST  (request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("shorturl");
    const collection = db.collection("urls");

    // cheeck if the short url is already present
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({sucess:false, error:true, message:"Short URL already exists"})
    }
    else{
        const result =  await collection.insertOne({
             url: body.url,
             shorturl: body.shorturl
         })
    }


    return Response.json({sucess:true, error:false, message:"URL shortened successfully"})
}