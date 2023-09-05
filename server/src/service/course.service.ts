import { getUsersDB, createCourseDB, getCourseByIdDB, updateCourseDB, deleteCourseDB } from '../repository/course.repository'
import { iCourse } from '../interfaces/interfaces'

async function getUsers(): Promise<iCourse[]> {
    const data = await getUsersDB();
    if (!data.length) throw new Error('no data');
    return data
}

async function createCourse(course: string, description: string): Promise<iCourse[]> {
    const data = await createCourseDB(course, description);
    if (!data.length) throw new Error('no data');
    return data
}

async function getCourseById(id: number): Promise<iCourse[]> {
    const data = await getCourseByIdDB(id);
    if (!data.length) throw new Error('no data')
    return data
}

async function updateCourse(course: string, id: number, description: string): Promise<iCourse[]> {
    const data = await updateCourseDB(course, id, description);
    if (!data.length) throw new Error('no data');
    return data
}

async function deleteCourse(id: number): Promise<iCourse[]> {
    const data = await deleteCourseDB(id);
    if (!data.length) throw new Error('no data');
    return data
}

export { getUsers, createCourse, getCourseById, updateCourse, deleteCourse }