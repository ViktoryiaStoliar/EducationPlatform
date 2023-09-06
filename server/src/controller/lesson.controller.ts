import express from 'express';
import { getAllLesson, getAllLessonById, createLesson, updateLesson, deleteLesson } from '../service/lesson.service';
import buildResponse from '../helper/build.Response';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllLesson();
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
});

route.get('/:id', async (req, res): Promise<void> => {
    try {
        const {id} =req.params;
        const data = await getAllLessonById(id);
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
});

route.post('/', async (req, res): Promise<void> => {
    try {
        const { course_id, title } = req.body;
        const data = await createLesson(course_id, title);
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
});

route.put('/:id', async (req, res): Promise<void> => {
    try {
        const {id} = req.params;
        const { course_id, title } = req.body;
        const data = await updateLesson(course_id, title, id);
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
});

route.delete('/:id', async (req, res): Promise<void> => {
    try {
        const {id} = req.params;
        const data = await deleteLesson(id);
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

export default route;
