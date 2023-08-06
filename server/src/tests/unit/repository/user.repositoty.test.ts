import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB } from "../../../repository/user.repository";

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

describe('getAllUserDB', () => {
    test('', async () => {
        const arr = [{ id: 1, name: 'test1', surname: 'test2', email: 'test@mail.ru', pwd: 'sjghljahgls32425gh' }, { id: 1, name: 'test3', surname: 'test4', email: 'test1@mail.ru', pwd: 'sjghljahgls32425askjgkj' }]
        mclient.query.mockResolvedValue({ rows: arr });

        const res = await getAllUserDB();

        expect(res).toEqual(arr)
    });

    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [] });

        const res = await getAllUserDB();

        expect(res).toEqual([])
    })
});

describe('getUserByIdDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, name: 'test', surname: 'test1', email: 'test@mail.ru', pwd: 'fgjhasiuryuyqwjvhj' }] });

        const res = await getUserByIdDB(1);

        expect(res).toEqual([{ id: 1, name: 'test', surname: 'test1', email: 'test@mail.ru', pwd: 'fgjhasiuryuyqwjvhj' }])
    })
});

describe('updateUserDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, name: 'test1', surname: 'test2', email: 'test@mail.ru', pwd: 'sjghljahgls32425gh' }] })

        const res = await updateUserDB('test1', 'test2', 'test@mail.ru', 'sjghljahgls32425gh', 1)

        expect(res).toEqual([{ id: 1, name: 'test1', surname: 'test2', email: 'test@mail.ru', pwd: 'sjghljahgls32425gh' }])
    })
})

describe('deleteUserDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, name: 'test1', surname: 'test2', email: 'test@mail.ru', pwd: 'sjghljahgls32425gh' }] });

        const res = await deleteUserDB(1);

        expect(res).toEqual([{ id: 1, name: 'test1', surname: 'test2', email: 'test@mail.ru', pwd: 'sjghljahgls32425gh' }])
    });

    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [] });

        const res = await deleteUserDB(1);
        expect(res).toEqual([])
    })
})

