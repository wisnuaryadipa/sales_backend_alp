
import models from '@src/models/postgres';
import {Op} from 'sequelize';

class Service {
    async getAllItems () {
        const items = await models.stck_raw_tm_item.findAll();
        return items;
    }
    async getItemsBySubJenisId (subJenisId: string) {
        const items = await models.stck_raw_tm_item.findAll({where: {uid_sub_jenis_item: subJenisId}});
        return items;
    }
    
}
export default new Service();