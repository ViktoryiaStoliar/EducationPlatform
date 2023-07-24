import { createUser, authUser } from '../../../service/api.service';
import * as repository from '../../../repository/api.repository';
import bcrypt from 'bcrypt'



describe('createUser', () => {
    test('', async () => {
        const mock = jest.spyOn(repository, 'getEmailDB');
        const mock2 = jest.spyOn(repository, 'createUserDB');
        const mock3 = jest.spyOn(bcrypt, 'hash');

        mock.mockResolvedValue([]);
        mock3.mockResolvedValue('djrsfjsgru5trdjchggl9o78p8756ukthgc,nb786535213');
        mock2.mockResolvedValue([{ id: 1, name: 'test', surname: 'test2', email: 'test@mail.ru', pwd: 'djrsfjsgru5trdjchggl9o78p8756ukthgc,nb786535213' }])

        const res = await createUser('test', 'test2', 'test@mail.ru', 'hdgj4567bjhgf');

        expect(mock).toHaveBeenCalled();
        expect(mock2).toHaveBeenCalled();
        expect(mock3).toHaveBeenCalled();
        expect(mock3).toHaveBeenCalledWith('hdgj4567bjhgf', 10)
    });

    // test('', () => {
    //     try {
    //         const res = await createUser('test', 'test2', 'test@mail.ru', 'hdgj4567bjhgf');
    //     } catch (error: any) {
    //         expect(mock).toHaveBeenCalled();
    //         expect(mock2).toHaveBeenCalled();
    //         expect(mock3).toHaveBeenCalled();
    //     }
    // })
});

describe('authUser', () => {
    test('', async () => {
        const mockGetUser = jest.spyOn(repository, 'getEmailDB');
        const mockHashCompare = jest.spyOn(bcrypt, 'compare');

        mockGetUser.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'testtest'
        }])
        mockHashCompare.mockResolvedValue(true);

        const res = await authUser('test@test.ru', 'testtest')
        expect(mockGetUser).toHaveBeenCalled()
        expect(mockHashCompare).toHaveBeenCalled()
        expect(mockHashCompare).toHaveBeenCalledWith('testtest', 'testtest')

        expect(res).toEqual([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'testtest'
        }])
    })

    test('', async () => {
        const mockGetUser = jest.spyOn(repository, 'getEmailDB');
        const mockHashCompare = jest.spyOn(bcrypt, 'compare');

        mockGetUser.mockResolvedValue([{
            id: 1,
            name: 'test',
            surname: 'stest',
            email: 'test@test.ru',
            pwd: 'testtest'
        }])
        mockHashCompare.mockResolvedValue(false);

        try {
            await authUser('test@test.ru', 'testtest')
        } catch (err: any) {
            expect(mockHashCompare).toHaveBeenCalled();
        }

    })
})
