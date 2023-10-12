import express, { Request, Response } from 'express'

const app = express()
const PORT = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})


app.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}/`)
})