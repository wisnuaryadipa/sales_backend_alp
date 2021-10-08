
import models from '@src/models/postgres';
import {Op} from 'sequelize';
import Sequelize from 'sequelize';

class Service {
    
    static init = models.stck_raw_tm_gudang.scope('activeGudang');

    async getAllWarehouse() { 
        const warehouses = await Service.init.findAll();
        return warehouses;
    }

}

export default new Service();