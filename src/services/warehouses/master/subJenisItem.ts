
import models from '@src/models/postgres';
import {Op} from 'sequelize';

class Service {

    static default = models.stck_raw_tm_sub_jenisitem.scope('activeSubJenisItem');
    
    async getAllSubJenisItems () {
        const subJenisItems = await Service.default.findAll();
        return subJenisItems;
    }

    async getSubJenisItemByUidJenisItem (jenisId: string) {
        const subJenisItems = await Service.default.findAll({where: {uid_jenis_item: jenisId}});
        return subJenisItems
    }
    
}
export default new Service();