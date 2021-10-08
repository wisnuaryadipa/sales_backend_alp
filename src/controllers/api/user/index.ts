import getAllUsers from '@src/controllers/api/user/getAllUsers';
import addUser from '@src/controllers/api/user/getAllUsers';
import getUser from '@src/controllers/api/user/getUser';

const userControllers = {
    getAllUsers: getAllUsers,
    addUser: addUser,
    getUser: getUser,

}

export default userControllers;