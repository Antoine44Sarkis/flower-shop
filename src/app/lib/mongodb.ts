import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

// Type-safe approach with type casting
type CustomGlobal = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const customGlobal = global as CustomGlobal;

let client: MongoClient;

if (!customGlobal._mongoClientPromise) {
  client = new MongoClient(uri, options);
  customGlobal._mongoClientPromise = client.connect();
}

const clientPromise = customGlobal._mongoClientPromise!;

export default clientPromise;
