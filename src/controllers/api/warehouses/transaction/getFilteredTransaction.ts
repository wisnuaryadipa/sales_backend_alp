import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController';
import {services} from '@src/services';
import IFilterTransaction from "@src/interfaces/warehouse/IFilterTransaction";


class Controller extends BaseController {
    
    requestHandler = async (req: Request, res: Response) => {
        const filterQuery: IFilterTransaction = {};
        const {dateEnd, dateStart, itemId, warehouseId, transactionType} = req.query;
        filterQuery.dateEnd = dateEnd?.toString();
        filterQuery.dateStart = dateStart?.toString();
        filterQuery.itemId = itemId?.toString();
        filterQuery.transactionType = transactionType?.toString();
        filterQuery.warehouseId = (warehouseId?.toString()) ? parseInt(warehouseId?.toString()) : undefined;

        const data = await services.warehouse.transaction.getFilterTransaction(filterQuery)
        this.sendResponse(req, res, { data });
    }

}

export default new Controller();