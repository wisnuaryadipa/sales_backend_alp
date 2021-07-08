import models from '@src/models/postgres';
import { IRole } from '@src/interfaces/db/IRole';

class Service {
    async getRoleById(roleId: any) {
        const role: IRole = await models.Roles.findOne({where: {id: roleId}});
        return role;
    }
    async getAllRoles() {
        const roles: [IRole] = await models.Roles.findAll();
        return roles;
    }
    async getRoleByName(name: string) {
        const role: IRole = await models.Roles.findOne({where: {name: name}});
        return role;
    }
}


export default new Service();