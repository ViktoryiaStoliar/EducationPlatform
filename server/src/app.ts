import express, {Request, Responce, NextFunction} from 'express';
import route from './controller/course.controller';
import user from './controller/user.controller';
import api from './controller/api.controller';
import bodyParser from 'body-parser';
import lesson from './controller/lesson.controller'
import cors from 'cors';


const app = express();

app.use(cors());
app.use (bodyParser.json());
app.use('/course', route);
app.use('/user', user);
app.use ('/api', api);
app.use('/lesson', lesson);

app.use((error, req: Request, res: Responce, next: NextFunction) => res.send(error.message))

export default app;