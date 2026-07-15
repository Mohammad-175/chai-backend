import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://osamabinladenhere444_db_user:ZZswrzFeYlEMNobp@hashim01.dtjs8lh.mongodb.net/";

const client = new MongoClient(uri);

try {
  await client.connect();
  console.log("✅ Connected");
} catch (err) {
  console.error(err);
}