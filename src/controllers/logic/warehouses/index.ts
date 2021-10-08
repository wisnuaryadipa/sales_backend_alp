import report from '@src/controllers/logic/warehouses/report';
import filter from '@src/controllers/logic/warehouses/fiter';
import transactions from '@src/controllers/logic/warehouses/transactions';
import stockOpname from '@src/controllers/logic/warehouses/stockOpname';

const warehouseLogic = {

    filter: filter,
    report: report,
    stockOpname: stockOpname,
    transcations: transactions,

}

export default warehouseLogic;