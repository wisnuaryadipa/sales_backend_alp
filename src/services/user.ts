
import models from '@src/models/postgres';
import { IUsers } from '@src/interfaces/db/IUsers';

class Service {
    async getAllUsers() {
        const users: [IUsers] = await models.Users.findall();
        return users;
    }
    async getUserById(id : String) {
        const user: IUsers = await models.Users.findOne({where: {id: id}})
        return user;
    }

}

export default new Service();