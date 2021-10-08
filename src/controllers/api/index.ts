import getAllUsers from '@src/controllers/api/user/getAllUsers';
import getUser from '@src/controllers/api/user/getUser';
import getAllRoles from '@src/controllers/api/role/getAllRoles';
import getRole from '@src/controllers/api/role/getRole';
import warehouseControllers from '@src/controllers/api/warehouses';

const api = {
    user: {
        getAllUsers,
        getUser
    },
    role: {
        getAllRoles,
        getRole,
    },
    warehouse: warehouseControllers
}

export default api;