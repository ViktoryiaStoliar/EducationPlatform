import express, { Request, Response } from 'express';
import { createUser, authUser } from '../service/api.service';
import createToken from '../helper/jwt'

const route = express.Router();

route.post('/register', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

route.post('/auth', async (req: Request, res: Response) => {
    try {
        const { email, pwd } = req.body;
        const data = await authUser(email, pwd);
        const token = createToken(data)
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        });
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
})

export default route