
import models from '@src/models/postgres';
import {Op} from 'sequelize';
import moment from 'moment';
import _ from 'lodash';

class Service {
    
    getOpnamesByItemId = async (itemId: string, warehouseId?: number) => {
        const opnames = await models.stck_raw_cutoff_stock.findAll({
            where: {
                item_id: itemId,
                cabang_id: warehouseId,
            }, 
            order: [['created_at', 'ASC']]
        });
        return opnames;
    }
    getLatestOpnameByItemId = async (itemId: string, warehouseId?: number) => {
        const latestOpname = await models.stck_raw_cutoff_stock.findOne({
            where: {
                item_id: itemId,
                cabang_id: warehouseId,
            }, 
            order: [['created_at', 'DESC']]
        });
        return latestOpname;
    }
    getLatestItemOpnameBeforeDate = async (itemId?: string, date?: Date, warehouseId?: number) => {
        // Find the latest inputed opname item before spcified date
        const latestOpnameBefore = models.stck_raw_cutoff_stock.findOne({
            where: {
                item_id: itemId, 
                cabang_id: warehouseId, 
                created_at: { [Op.lt]: date }}, 
            order: [['created_at', 'DESC']]})
        return latestOpnameBefore;
    }

    getOpnameInEndOfTheMonth= async (itemId: string, warehouseId: number, year: number, month: number) => {

        const dateStart = moment(moment().year(year).month(month).date(23).endOf('day'));
        const dateEnd = moment(_.cloneDeep(dateStart).endOf('month')).toDate();
        
        const latestOpname = await models.stck_raw_cutoff_stock.findOne({
            where: {
                item_id: itemId, 
                cabang_id: warehouseId, 
                created_at: {
                    [Op.between]: [moment(dateStart.toDate()), moment(dateEnd)],
                }
                
            }, 
            order: [['created_at', 'DESC']]
        });
        // console.log(latestOpname)
        return latestOpname;
    }

}

export default new Service();