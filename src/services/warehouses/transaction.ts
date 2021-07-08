import models from '@src/models/postgres';
import IFilterTransaction from '@src/interfaces/warehouse/IFilterTransaction';

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
    async getFilterTransaction(filterValues: IFilterTransaction) {
        
        const {dateEnd, dateStart, itemId, warehouseId, transactionType} = filterValues;
        const where: any = {};

        (dateEnd && dateStart) && (where['created_at'] = { $between: [dateStart, dateEnd] });
        (itemId) && (where['item_id'] = itemId);
        (warehouseId) && (where['gudang_id'] = warehouseId);
        (transactionType) && (where['status'] = transactionType);

        const transactions = await models.stck_raw_stock.findAll({where});
        return transactions;
    }
    
}

export default new Service();