import getAllUsers from '@src/controllers/api/user/getAllUsers';
import getUser from '@src/controllers/api/user/getUser';
import getAllRoles from '@src/controllers/api/role/getAllRoles';


const api = {
    user: {
        getAllUsers,
        getUser
    },
    role: {
        getAllRoles,
    }
}

export default api;