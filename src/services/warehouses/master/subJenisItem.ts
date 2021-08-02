
import models from '@src/models/postgres';
import {Op} from 'sequelize';

class Service {
    async getAllSubJenisItems () {
        const subJenisItems = await models.stck_raw_tm_sub_jenisitem.findAll();
        return subJenisItems;
    }
    
}
export default new Service();