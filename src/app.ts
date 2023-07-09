import express, {Request, Responce, NextFunction} from 'express'
import route from './controller/course.controller';
import bodyParser from 'body-parser'

const app = express();

app.use (bodyParser.json());
app.use('/course', route);
app.use((error, req: Request, res: Responce, next: NextFunction) => res.send(error.message))

export default app;