import bcrypt from 'bcrypt'
import { createUserDB, getEmailDB } from '../repository/api.repository';
import { iUser } from '../interfaces/interfaces';

const salt = 10;

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const foundEmail = await getEmailDB(email);
    if (foundEmail.length) throw new Error('no this email');
    const hashPwd = await bcrypt.hash(pwd, salt)
    const data = await createUserDB(name, surname, email, hashPwd);
    if (!data.length) throw new Error('no data');
    return data
}

async function authUser(email: string, pwd: string): Promise<iUser> {
    const foundEmail = await getEmailDB(email)
    if (!foundEmail.length) throw new Error('this email doesn`t exist');
    const bool = await bcrypt.compare(pwd, foundEmail[0].pwd);
    if (!bool) throw new Error("pwd don`t match");
    return foundEmail
}


export { createUser, authUser }