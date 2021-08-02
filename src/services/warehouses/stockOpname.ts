
import models from '@src/models/postgres';
import {Op} from 'sequelize';

class Service {
    async getOpnamesByItemId (itemId: string) {
        const opnames = await models.stck_raw_cutoff_stock.findAll({where: {item_id: itemId}, order: [['created_at', 'ASC']]});
        return opnames;
    }
    async getLatestOpnameByItemId (itemId: string) {
        const latestOpname = await models.stck_raw_cutoff_stock.findOne({where: {item_id: itemId}, order: [['created_at', 'DESC']]});
        return latestOpname;
    }

    async getLatestItemOpnameBeforeDate  (itemId?: string, date?: Date, warehouseId?: number) {
        // Find the latest inputed opname item before spcified date
        const latestOpnameBefore = models.stck_raw_cutoff_stock.findOne({
            where: {
                item_id: itemId, 
                cabang_id: warehouseId, 
                created_at: { [Op.lt]: date }}, 
            order: [['created_at', 'DESC']]})
        return latestOpnameBefore;
    }
}

export default new Service();