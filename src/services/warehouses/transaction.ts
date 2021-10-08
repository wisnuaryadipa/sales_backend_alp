import models from '@src/models/postgres';
import ITransactions, {TransactionType} from '@src/interfaces/warehouse/ITransactions';
import moment from 'moment';
import {Op, Model} from 'sequelize';

class Service {
    async getTransactionById(transactionId: any) {
        const transaction = await models.stck_raw_stock.findOne({where: {id: transactionId}});
        return transaction;
    }
    async getAllTransactions() {
        const transactions = await models.stck_raw_stock.findAll();
        return transactions;
    }
    async getTransactionByType(type: string) {
        const transactions = await models.stck_raw_stock.findAll({where: {status: type}});
        return transactions;
    }
    async getTransactionByWarehouseId(warehouseId: number) {
        const transactions = await models.stck_raw_stock.findAll({where: {gudang_id: warehouseId}});
        return transactions;
    }
    async getTransactionByItemId(itemId: string) {
        const transactions = await models.stck_raw_stock.findAll({where: {item_id: itemId}});
        return transactions;
    }
    async getFilterTransaction(filterValues: ITransactions) {
        
        const {dateEnd, dateStart, itemId, warehouseId, transactionType} = filterValues;
        const where: any = {};

        if (dateEnd) {
            if (dateStart) {
                // If dateStart and dateEnd has value (declared)
                where['created_at'] = { [Op.between]: [moment(dateStart), moment(dateEnd)] }
            } else {
                // If only dateEnd has value
                where['created_at'] = { [Op.lte]: moment(dateEnd) }
            }
        }
        (itemId) && (where['item_id'] = itemId);
        (warehouseId) && (where['gudang_id'] = warehouseId);
        (transactionType) && (where['status'] = transactionType);
        const transactions = await models.stck_raw_stock.findAll({where});
        
        return transactions;
    }
    async getTotalQuantity(args :any) {
        
        const {dateEnd, dateStart, itemId, warehouseId, transactionType} = args;
        let transactions = 0;
        const where: any = {};
        
        if (dateEnd) {
            if (dateStart) {
                // If dateStart and dateEnd has value (declared)
                where['created_at'] = { [Op.between]: [moment(dateStart), moment(dateEnd)] }
            } else {
                // If only dateEnd has value
                where['created_at'] = { [Op.lte]: moment(dateEnd) }
            }
        }
        (itemId) && (where['item_id'] = itemId);
        (warehouseId) && (where['gudang_id'] = warehouseId);
        (transactionType) && (where['status'] = transactionType);


        await models.stck_raw_stock.sum('quantity', {where}).then((transaction: any) => {
            transactions = transaction;
        }).catch((err: any) => {
            console.log(err);
        });

        return (transactions) ? transactions : 0;
    }
}

export default new Service();