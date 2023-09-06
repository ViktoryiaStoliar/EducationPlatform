import { getAllLessonDB, getAllLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB } from '../repository/lesson.repository';

async function getAllLesson() {
    const data = await getAllLessonDB();
    // if (!data.length) throw new Error ('no data');
    return data
}

async function getAllLessonById(id) {
    const data = await getAllLessonByIdDB(id);
    return data
}

async function createLesson(course_id, title){
    const data = await createLessonDB(course_id, title);
    return data
}

async function updateLesson(course_id, title, id){
    const data = await updateLessonDB(course_id, title, id);
    return data
}

async function deleteLesson(id){
    const data = await deleteLessonDB(id);
    return data
}

export { getAllLesson, getAllLessonById, createLesson, updateLesson, deleteLesson };
