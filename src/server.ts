import express from 'express';
import { config } from 'dotenv'
import { routes } from './routes'

const app = express();

app.use(express.json());  
app.use(routes);

config()
const port = process.env.PORT
app.listen(port, () => `🔥 Server is running on port ${port}`);
