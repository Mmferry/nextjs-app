// /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    try {
      const clinet = await MongoClient.connect(
        "mmongodb://admin:admin@cluster0-shard-00-00.itefi.mongodb.net:27017,cluster0-shard-00-01.itefi.mongodb.net:27017,cluster0-shard-00-02.itefi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9ft1h1-shard-0&authSource=admin&retryWrites=true&w=majority"
      );
      const db = clinet.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      clinet.close();

      return res.status(200).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      return res.status(error.status || 500).end(error.message)
    }
  }
}

export default handler;
