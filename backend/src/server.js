import express, { json } from 'express';
import dotenv from 'dotenv';
import {initDB} from './config/db.js';
import rateLimiterMiddleware from './middleware/rateLimiter.js';

import transactionsRoute from './routes/transactionsRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(rateLimiterMiddleware);
app.use(express.json());


app.use("/api/transactions", transactionsRoute);


initDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
});


