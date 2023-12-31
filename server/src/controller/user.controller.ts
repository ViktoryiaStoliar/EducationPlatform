import express, { Request, Response } from 'express';
import { getAllUser, getUserById, updateUser, deleteUser } from '../service/user.service'
import buildResponse from '../helper/build.Response';
const route = express.Router();


route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllUser();
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})


route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        res.status(200).send(data)
    } catch (error: any) {
        res.sratus(404).send(error.message)
    }
})

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body
        const data = await updateUser(name, surname, email, pwd, id);
        res.status(200).send(data)
    } catch (error: any) {
        res.sratus(404).send(error.message)
    }
})

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        res.status(200).send(data)
    } catch (error: any) {
        res.sratus(404).send(error.message)
    }
})

export default route