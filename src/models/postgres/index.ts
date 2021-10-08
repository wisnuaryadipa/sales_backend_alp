
import sequelize from '@src/loaders/sequelize';
import Sequelize from 'sequelize';
import {IDbModel} from '@src/interfaces/db/IDbModel';
import Roles from '@src/models/postgres/Roles';
import stck_raw_stock from '@src/models/postgres/stck_raw_stock';
import stck_raw_cutoff_stock from './stck_raw_cutoff_stock';
import stck_raw_tm_sub_jenisitem from './stck_raw_tm_sub_jenisitem';
import stck_raw_tm_jenisitem from './stck_raw_tm_jenisitem';
import stck_raw_tm_item from './stck_raw_tm_item';
import stck_raw_tm_gudang from './stck_raw_tm_gudang';


const models: IDbModel = {
    Users: require('./Users')(sequelize),
    Roles: Roles(sequelize),
    stck_raw_stock: stck_raw_stock(sequelize),
    stck_raw_cutoff_stock: stck_raw_cutoff_stock(sequelize),
    stck_raw_tm_sub_jenisitem: stck_raw_tm_sub_jenisitem(sequelize),
    stck_raw_tm_jenisitem: stck_raw_tm_jenisitem(sequelize),
    stck_raw_tm_item: stck_raw_tm_item(sequelize),
    stck_raw_tm_gudang: stck_raw_tm_gudang(sequelize),
}

Object.keys(models).forEach(key => {
    if (models[key].associate) {
        models[key].associate(models);
    }
})

export {sequelize, Sequelize}
export default models;