
import sequelize from '@src/loaders/sequelize';
import Sequelize from 'sequelize';
import {IDbModel} from '@src/interfaces/db/IDbModel';
import Roles from '@src/models/postgres/Roles';


const models: IDbModel = {
    Users: require('./Users')(sequelize),
    Roles: Roles(sequelize),

}

Object.keys(models).forEach(key => {
    if (models[key].associate) {
        models[key].associate(models);
    }
})

export {sequelize, Sequelize}
export default models;