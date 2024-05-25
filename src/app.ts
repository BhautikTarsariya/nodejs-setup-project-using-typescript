import * as dotenv from "dotenv";
import express, { Express } from 'express';
import routes from './routes/index';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app: Express = express();

dotenv.config();

const corsOpts = {
    credentials: true,
    methods: ["POST", "PUT", "GET", "DELETE", "HEAD"],
    origin: [
        "https://localhost:3000",
        "https://example.com",
    ],
};

app.use(cors(corsOpts));
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(bodyParser.json());

mongoose
    .connect("mongodb+srv://admin:itw.admin@node-tutorial.rtnnu.mongodb.net/management-system?retryWrites=true&w=majority")
    .then(() => app.listen(3000, () => console.log(`Server running on http://localhost:3000`)))
    .catch((error) => {
        throw error;
    });

routes(app);