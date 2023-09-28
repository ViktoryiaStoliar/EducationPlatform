import jwt from 'jsonwebtoken';

const createToken = (authUser) => {
    const token = jwt.sign(authUser[0], 'testKey');
    return token
}

export default createToken;


