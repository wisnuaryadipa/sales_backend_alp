
import sequelize from '../../loaders/sequelize';
import Sequelize from 'sequelize';
import {IDbModel} from '../../interfaces/db/IDbModel';

const db: IDbModel = {};

const models: IDbModel = {
    Users: require('./Users')(sequelize),

}

Object.keys(models).forEach(key => {
    if (models[key].associate) {
        models[key].associate(db);
    }
})

export {sequelize, Sequelize}
export default db;