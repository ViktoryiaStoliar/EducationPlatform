import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository'
import { iUser } from '../interfaces/interfaces'

async function getAllUser(): Promise<iUser[]> {
    const data = await getAllUserDB();
    if (!data.length) throw new Error('no data');
    return data
}

async function getUserById(id: number): Promise<iUser[]> {
    const data = await getUserByIdDB(id);
    return data
}

async function updateUser(name: string, surname: string, email: string, pwd: string, id: number): Promise<iUser[]> {
    const data = await updateUserDB(name, surname, email, pwd, id);
    if (!data.length) throw new Error('no data');
    return data
}

async function deleteUser(id: number): Promise<iUser[]> {
    const data = await deleteUserDB(id);
    if (!id) throw new Error ('no this id')
    return data
}

export { getAllUser, getUserById, updateUser, deleteUser }