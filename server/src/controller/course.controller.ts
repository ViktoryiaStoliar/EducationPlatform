import express, { Request, Response } from 'express';
import { getUsers, createCourse, getCourseById, updateCourse, deleteCourse } from '../service/course.service'
import { iCourse} from '../interfaces/interfaces'
import buildResponse from '../helper/build.Response';

const route = express.Router();

route.get('/', async (req: Request, res: Response):Promise<void> => {
    try {
        const data: iCourse[] = await getUsers();
        buildResponse(res, 200, data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

route.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { course, description } = req.body;
        const data : iCourse[]= await createCourse(course, description);
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iCourse[] = await getCourseById(id);
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { course, description } = req.body;
        const { id } = req.params;
        const data : iCourse[]= await updateCourse(course, id, description);
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data: iCourse[] = await deleteCourse(id);
        res.status(200).send(data)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default route