const bcrypt = require('bcryptjs');

import { apiHandler } from '../../../helpers/api/api-handler';
import { usersRepo } from '../../../helpers/users-repo';

export default apiHandler({
    post: register
});

async function register(req, res) {
    // split out password from user details 
    const { password, ...user } = req.body;

    // validate
    const result = await usersRepo.find(user.username);
    if (result)
        throw `User with the username "${user.username}" already exists`;

    // hash password
    user.hash = bcrypt.hashSync(password, 10);    

    await usersRepo.create(user);
    return res.status(200).json({});
}