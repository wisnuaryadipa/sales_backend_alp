
import models from '@src/models/postgres';
import { IUser } from 'src/interfaces/db/IUser';

class Service {
    async getAllUsers() {
        const users: [IUser] = await models.Users.findAll();
        return users;
    }
    async getUserById(id : string) {
        const user: IUser = await models.Users.findOne({where: {id: id}})
        return user;
    }
    async getUserByUid(uid: string) {
        const user: IUser = await models.Users.findOne({where: {uid: uid}})
        return user;
    }
    async getUserByEmail(email: string) {
        const user: IUser = await models.Users.findOne({where: {email: email}})
        return user;
    }

}

export default new Service();