
import getAllRoles from '@src/controllers/api/role/getAllRoles'
import getRole from '@src/controllers/api/role/getRole'

const roleControllers = {
    getAllRoles: getAllRoles, 
    getRole: getRole
}

export default roleControllers;