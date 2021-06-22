import models from '@src/models/postgres';

class Service {
    async getAllRoles() {
        const roles = await models.Roles.findAll();
        return roles;
    }
    async getRole(id: string) {
        const role = await models.Roles.findOne({where: {id: id}});
        return role;
    }
    async getRoleByName(name: string) {
        const role = await models.Roles.findOne({where: {name: name}});
        return role;
    }
}


export default new Service();