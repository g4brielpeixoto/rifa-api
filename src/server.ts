import express from 'express';
import { Router, Request, Response } from 'express'
import { config } from 'dotenv'

const app = express();
const route = Router();

app.use(express.json());
route.get('/', (request: Request, response: Response) => {
    response.send('Hello World!');
  });
  
app.use(route);

config()
const port = process.env.PORT
app.listen(port, () => `🔥 Server is running on port ${port}`);


//TODO: Instalar e configurar prisma