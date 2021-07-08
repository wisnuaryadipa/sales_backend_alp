
import models from '@src/models/postgres';
import { IUser } from 'src/interfaces/db/IUser';

class Service {
    async getAllUsers() {
        const users: [IUser] = await models.Users.findAll();
        return users;
    }
    async getUserById(id : string) {
        const user = await models.Users.findOne({where: {id: id}})
        // console.log(user.dataValues)
        return user.dataValues;
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