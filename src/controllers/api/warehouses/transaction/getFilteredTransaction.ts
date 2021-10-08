import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController';
import {services} from '@src/services';
import IFilterTransaction from "@src/interfaces/warehouse/ITransactions";
import moment from 'moment';
import logcStockController from 'src/controllers/logic/warehouses/fiter';


class Controller extends BaseController {
    
    requestHandler = async (req: Request, res: Response) => {

        const itemId = req.query.itemId?.toString();
        const dateStart = (req.query.dateStart) ? moment(req.query.dateStart?.toString()).toDate() : undefined;
        const dateEnd = (req.query.dateEnd) ? moment(req.query.dateEnd?.toString()).toDate() : undefined;
        const warehouseId = (req.query.warehouseId?.toString()) ? parseInt(req.query.warehouseId?.toString()) : undefined;
        const transactionType = req.query.transactionType?.toString().toUpperCase();

        const data = await logcStockController.stockByDateRangeByWarehouse(dateStart, dateEnd, itemId, warehouseId, transactionType)

        this.sendResponse(req, res, { data });
    }

}

export default new Controller();