import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routees from './routes';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routees);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
