
import sequelize from '@src/loaders/sequelize';
import Sequelize from 'sequelize';
import {IDbModel} from '@src/interfaces/db/IDbModel';
import Roles from '@src/models/postgres/Roles';
import stck_raw_stock from '@src/models/postgres/stck_raw_stock';


const models: IDbModel = {
    Users: require('./Users')(sequelize),
    Roles: Roles(sequelize),
    stck_raw_stock: stck_raw_stock(sequelize),

}

Object.keys(models).forEach(key => {
    if (models[key].associate) {
        models[key].associate(models);
    }
})

export {sequelize, Sequelize}
export default models;