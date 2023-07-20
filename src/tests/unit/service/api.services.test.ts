import { createUser, authUser } from '../../../service/api.service';
import * as repository from '../../../repository/api.repository';
import bcrypt from 'bcrypt'

describe('authUser', () => {
    test('', async () => {
        const mock = jest.spyOn(repository, 'getEmailDB');
        const hashMock = jest.spyOn(bcrypt, 'compare');

        mock.mockResolvedValue([{ id: 1, name: 'test', surname: 'test2', email: 'test@mail.ru', pwd: 'dfghjktjy' }]);
        hashMock.mockResolvedValue(true)

        const res = await authUser('test@mail.ru', 'dfghjktjy');

        expect(mock).toHaveBeenCalled();
        expect(hashMock).toHaveBeenCalled();
        // expect(hashMock).toHaveBeenCalledWith(true);

        expect(res).toEqual([{ id: 1, name: 'test', surname: 'test2', email: 'test@mail.ru', pwd: 'dfghjktjy' }])

    })
});

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
})
