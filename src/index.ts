import express from 'express';
import { connectToMongo } from './services/connectService';
import { routes } from './routes';
import { hash } from 'bcrypt';
import cors from 'cors';

import userJson from './samples/sampleUser.json';
import { createUser } from './services/createUser';

const saltRounds = 10;
const app = express();

// makes express able to parse json body from responses
app.use(express.json());
app.use(cors());

// gets port either from environment variable or sets it to 3000 if not found
const port = process.env.PORT || 3000;

// imports all routes from routes/index.ts
app.use('/', routes);

// starts server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  // connects to MongoDB
  connectToMongo().catch(err => console.log(err));
});
