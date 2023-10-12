import express, { Request, Response } from 'express';
import { connection } from './connection/connection';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
});

connection();

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}/`)
})