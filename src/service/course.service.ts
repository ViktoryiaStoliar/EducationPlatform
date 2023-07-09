import { getUsersDB, createCourseDB, getCourseByIdDB, updateCourseDB, deleteCourseDB } from '../repository/course.repository'
import { iCourse } from '../interfaces/interfaces'

async function getUsers(): Promise<iCourse[]> {
    const data = await getUsersDB();
    if (!data.length) throw new Error('no data');
    return data
}

async function createCourse(course: string): Promise<iCourse[]> {
    const data = await createCourseDB(course);
    // if (!data.length) throw new Error('no data');
    return data
}

async function getCourseById(id: number): Promise<iCourse[]> {
    const data = await getCourseByIdDB(id);
    return data
}

async function updateCourse(course: string, id: number): Promise<iCourse[]> {
    const data = await updateCourseDB(course, id);
    // if (!data.length) throw new Error('no data');
    return data
}

async function deleteCourse(id: number): Promise<iCourse[]> {
    const data = await deleteCourseDB(id);
    return data
}

export { getUsers, createCourse, getCourseById, updateCourse, deleteCourse}