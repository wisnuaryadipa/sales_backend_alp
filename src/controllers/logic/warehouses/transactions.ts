import {services} from '@src/services';
import _ from 'lodash';
import moment from 'moment';
import IFilterTransaction from "@src/interfaces/warehouse/ITransactions";

class Controller {

    getTransactionWholeSelectedMonth = async (item: string, warehouseId: number, date: Date) => {

        const dateStart = date;
        const dateEnd = moment(_.cloneDeep(date)).endOf('month').toDate();
        const transactions = this.getTransactionsByDateRange(item, warehouseId, dateStart, dateEnd);
                   
        return transactions;
    }

    getTransactionsByDateRange = async (item: string, warehouseId: number, dateStart: Date, dateEnd: Date) => {

        const params: IFilterTransaction = {
            itemId: item,
            warehouseId: warehouseId,
            dateStart: dateStart,
            dateEnd: dateEnd
        };
        const transactions = await services.warehouse.transaction.getFilterTransaction(params);
        return transactions;
    }

    filterTransactionByStatus = (transactions: any, _status: String) => {

        return _.filter(transactions, ({status}) => status == _status);

    }
}

export default new Controller();