
import models from '@src/models/postgres';
import {Op} from 'sequelize';

class Service {
    async getAllJenisItems () {
        const jenisItems = await models.stck_raw_tm_jenisitem.findAll();
        return jenisItems;
    }
    
}
export default new Service();