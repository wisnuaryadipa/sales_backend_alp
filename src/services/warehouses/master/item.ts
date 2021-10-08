
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
    async getItemsByJenisId (jenisId: string) {
        const items = await models.stck.raw.tm_item.findAll({where: {uid_jenis_item: jenisId}});
        return items;
    }
    
    
}
export default new Service();