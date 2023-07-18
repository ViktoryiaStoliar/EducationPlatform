import { getUsers, getCourseById, createCourse, updateCourse, deleteCourse } from '../../../service/course.service'
import * as repository from '../../../repository/course.repository'

describe('', () => {
    test('', async () => {
        const repOfFunc = jest.spyOn(repository, 'getUsersDB');
        repOfFunc.mockResolvedValue([{ id: 1, course: 'test1' }, { id: 2, course: 'test2' }])

        const res = await getUsers();

        expect(repOfFunc).toHaveBeenCalled();
        expect(res.length).toBeGreaterThan(0);
        expect(res).toEqual([{ id: 1, course: 'test1' }, { id: 2, course: 'test2' }])
    });

    test('', async () => {
        const mock = jest.spyOn(repository, 'getUsersDB');
        mock.mockResolvedValue([]);

        try {
            const res = await getUsers();

        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('no data')
        }
    })
})

describe('', () => {
    test('', async () => {
        const repFunc = jest.spyOn(repository, 'getCourseByIdDB');
        repFunc.mockResolvedValue([{ id: 1, course: 'test' }]);

        const res = await getCourseById(1);

        expect(repFunc).toHaveBeenCalled();
        expect(repFunc).toHaveBeenCalledWith(1);
        // expect(repFunc.length).toBe(1);

        expect(res.length).toBe(1);
        expect(res).toHaveLength(1);
        expect(res).toEqual([{ id: 1, course: 'test' }])
    });
    test('', async () => {
        const mock = jest.spyOn(repository, 'getCourseByIdDB');
        mock.mockResolvedValue([]);

        try {
            const res = await getCourseById(1);

        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('no data')
        }
    })
})

describe('', () => {
    test('', async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'test' }])

        const res = await createCourse('test');

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledWith('test');
        expect(res).toEqual([{ id: 1, course: 'test' }]);
        expect(res).toHaveLength(1);
    });

    test('', async () => {
        const mock = jest.spyOn(repository, 'createCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'test' }]);

        try {
            const res = await createCourse('test')
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('no data')
        }
    })
});

describe('', () => {
    test('', async () => {
        const mock = jest.spyOn(repository, 'updateCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'test' }])

        const res = await updateCourse('test', 1);

        expect(mock).toHaveBeenCalled();
        expect(res).toHaveLength(1);
        expect(res).toEqual([{ id: 1, course: 'test' }]);
    });

    test('', async () => {
        const mock = jest.spyOn(repository, 'updateCourseDB');
        mock.mockResolvedValue([]);
        try {
            const res = await updateCourse('test', 1)
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('no data');
        }
    })
});

describe('', () => {
    test('', async () => {
        const mock = jest.spyOn(repository, 'deleteCourseDB');
        mock.mockResolvedValue([{ id: 1, course: 'test' }])

        const res = await deleteCourse(1)

        expect(mock).toBeCalled();
        expect(mock).toBeCalledWith(1);
        expect(res.length).toBeLessThan(2);
        expect(res).toEqual([{ id: 1, course: 'test' }])
    });

    test('', async () => {
        const mock = jest.spyOn(repository, 'deleteCourseDB');
        mock.mockResolvedValue([]);
        try {
            const res = await deleteCourse(2);
        } catch (error: any) {
            expect(mock).toHaveBeenCalled();
            expect(error.message).toBe('no data')
        }
    })
})




































































































