import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController';
import {services} from '@src/services';
import IFilterTransaction from "@src/interfaces/warehouse/ITransactions";
import moment from 'moment';


class Controller extends BaseController {
    
    requestHandler = async (req: Request, res: Response) => {
        const {dateEnd, dateStart, itemId, warehouseId, transactionType} = req.query;
        const filterQuery = {
            dateEnd: (dateEnd) ? moment(dateEnd?.toString()).toDate() : undefined,
            dateStart: (dateStart) ? moment(dateStart?.toString()).toDate() : undefined,
            itemId: itemId?.toString(),
            transactionType: transactionType?.toString().toUpperCase() ,
            warehouseId: (warehouseId?.toString()) ? parseInt(warehouseId?.toString()) : undefined
        };

        const totalIn: number = (filterQuery.transactionType == "IN" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "IN"}) : 0;
        const totalOut = (filterQuery.transactionType == "OUT" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "OUT"}) : 0;
        const totalSwapin: number = (filterQuery.transactionType == "SWAPIN" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "SWAPIN"}) : 0;
        const totalSwapout: number = (filterQuery.transactionType == "SWAPOUT" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "SWAPOUT"}) : 0;
        const total: number = (totalIn + totalSwapin) - (totalOut + totalSwapout);

        const data = {
            listTransactions: await services.warehouse.transaction.getFilterTransaction(filterQuery),
            totalQuantity: {
                in: totalIn,
                out: totalOut,
                swapin: totalSwapin,
                swapout: totalSwapout,
                all: total,
            }
        }
        this.sendResponse(req, res, { data });
    }

}

export default new Controller();