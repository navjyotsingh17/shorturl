import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongoDB";

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("shorturl");
    const collection = db.collection("urls");

    const doc = await collection.findOne({shorturl: shorturl})
    if(doc){
        redirect(doc.url)
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_BASE_URL}`)
    }

    return <div>My Post: {shorturl}</div>
  }