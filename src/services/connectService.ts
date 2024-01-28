import dotenv from 'dotenv';
import {Schema, model, connect} from 'mongoose';

// Loads all environment variables from .env file in root into process.env object
dotenv.config();

export async function connectToMongo() {
  // connects to MongoDB using the uri from .env
  await connect(process.env.MONGO_URI!);
  console.log('Connected to MongoDB');
}
