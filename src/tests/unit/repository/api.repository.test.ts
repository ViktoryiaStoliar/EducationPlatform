import bcrypt from 'bcrypt';
import { createUserDB, getEmailDB } from '../../../repository/api.repository';

const mclient = {
    query: jest.fn()
};

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

describe('createUserDB', () => {
    test('', async () => {
        const arr = [
            { id: 1, name: 'test', surname: 'test1', email: 'test@mail.ru', pwd: 'gfsdkhagsfdhas' }
        ]
        mclient.query.mockResolvedValue({ rows: arr });

        const res = await createUserDB('test', 'test1', 'test@mail.ru', 'gfsdkhagsfdhas')

        expect(res).toEqual(arr)
    });

    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [] });

        const res = await createUserDB('test', 'test1', 'test@mail.ru', 'gfsdkhagsfdhas');

        expect(res).toEqual([])
    })
});

describe('getEmailDB', () => {
    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [{ id: 1, name: 'test', surname: 'test1', email: 'test@mail.ru', pwd: 'hgdhfdkhgd' }] });

        const res = await getEmailDB('test@mail.ru');

        expect(res).toEqual([{ id: 1, name: 'test', surname: 'test1', email: 'test@mail.ru', pwd: 'hgdhfdkhgd' }])
    });

    test('', async () => {
        mclient.query.mockResolvedValue({ rows: [] })

        const res = await getEmailDB('test@mail.ru');

        expect(res).toEqual([])
    })
});