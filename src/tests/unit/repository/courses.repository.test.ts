import { getUsersDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../../../repository/course.repository'

const mclient = {
    query: jest.fn()
}

jest.mock('pg', () => {
    return {
        Pool: jest.fn(() => {
            return {
                connect: jest.fn(() => {
                    return mclient
                }),
            }
        }),
    }
})

describe('getUsersDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'test1' }, { id: 2, course: 'test2' }] });

        const res = await getUsersDB();

        expect(res).toEqual([{ id: 1, course: 'test1' }, { id: 2, course: 'test2' }])
    })
});

describe('getCourseByIdDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'test1' }] });

        const res = await getCourseByIdDB(1);

        expect(res).toEqual([{ id: 1, course: 'test1' }])
    })
});

describe('createCourseDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'test' }] });

        const res = await createCourseDB('test');

        expect(res).toEqual([{ id: 1, course: 'test' }])
    })
});

describe('updateCourseDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, course: 'test1' }] });

        const res = await updateCourseDB('test1', 1);

        expect(res).toEqual([{ id: 1, course: 'test1' }])
    })
});

describe('deleteCourseDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({rows: [{id: 1, course: 'test1'}]})

        const res = await deleteCourseDB(1);
        
        expect(res).toEqual([{id: 1, course: 'test1'}])
    })
});

