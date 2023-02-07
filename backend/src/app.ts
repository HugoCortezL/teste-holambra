import express, { Request, Response } from 'express';
import bodyParser from "body-parser";
import { prospectRouter } from './routes/prospect';
import cors from "cors";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', function (_: Request, res: Response) {
    res.status(200).send({ message: "Message" })
});

app.use("/api/v1", prospectRouter)

export default app