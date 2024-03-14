import { MongoClient } from 'mongodb';

const uri = process.env.MONGOBD_URI;
const dbName = process.env.MONGOBD_DB;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = new MongoClient(uri, {
    userNewUriParser: true,
    userUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;
  console.log(client, db);
  return { client, db };
}