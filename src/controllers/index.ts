import getAllUsers from '@src/controllers/api/user/getAllUsers';
import getUser from '@src/controllers/api/user/getUser';


const api = {
    user: {
        getAllUsers,
        getUser
    }
}

export default api;