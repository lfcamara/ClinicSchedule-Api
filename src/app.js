import express from 'express';
import fs from 'fs';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

export default app;
