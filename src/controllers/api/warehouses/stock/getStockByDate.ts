import { TransactionType } from '@src/interfaces/warehouse/ITransactionType';

import {Request, Response} from 'express';
import { BaseController } from "@src/controllers/baseController";
import {services} from '@src/services'
import moment from 'moment';
import { options } from 'joi';
import Joi from 'joi';
import { IUser } from '@src/interfaces/db/IUser';


class Controller extends BaseController {

    requestHandler = async (req: Request, res: Response) => {
        /** 
         * Input : ItemId:String, WarehouseId:Integer, Date:String
         * Output : Quantity
         * 
        */
        const itemId = req.query.itemId?.toString();
        const date = moment(req.query.date?.toString().concat(" 23:59:59")).toDate();
        const warehouseId = (req.query.warehouseId?.toString()) ? parseInt(req.query.warehouseId?.toString()) : undefined;

        const lastStockOpname = await services.warehouse.stockOpname.getLatestItemOpnameBeforeDate(itemId, date, warehouseId);
        const filterQuery = {
            dateEnd: (date) ? moment(date?.toString()).toDate() : undefined,
            dateStart: (lastStockOpname) ? moment(lastStockOpname.createdAt?.toString()).toDate() : undefined,
            itemId: itemId?.toString(),
            warehouseId: warehouseId,
            transactionType: undefined
        };

        const totalIn: number = (filterQuery.transactionType == "IN" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "IN"}) : 0;
        const totalOut = (filterQuery.transactionType == "OUT" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "OUT"}) : 0;
        const totalSwapin: number = (filterQuery.transactionType == "SWAPIN" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "SWAPIN"}) : 0;
        const totalSwapout: number = (filterQuery.transactionType == "SWAPOUT" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "SWAPOUT"}) : 0;
        const total: number = (totalIn + totalSwapin) - (totalOut + totalSwapout);
        
        const _qtyOpname = (lastStockOpname) ? lastStockOpname.quantity : 0;
        const _dateOpname = (lastStockOpname) ? lastStockOpname.dateOpname : null;
        const data = {
            listTransactions: await services.warehouse.transaction.getFilterTransaction(filterQuery),
            totalQuantity: {
                in: totalIn,
                out: totalOut,
                swapin: totalSwapin,
                swapout: totalSwapout,
                qtyOpname: _qtyOpname,
                dateOpname: _dateOpname,
                all: _qtyOpname+total,
            }
        }
        this.sendResponse(req, res, {data})
    }


}

export default new Controller();