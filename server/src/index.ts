import express, { Request, Response } from 'express';
import { connection } from './connection/connection';
import dotenv from 'dotenv';
import commentRouter from './routes/comment.route';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use('/comments', commentRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
});

connection();

app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}/`)
})