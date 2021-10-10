import { TransactionType } from '@src/interfaces/warehouse/ITransactionType';
import {Request, Response} from 'express';
import { BaseController } from "@src/controllers/baseController";
import {services} from '@src/services'
import moment from 'moment';
import { options } from 'joi';
import Joi from 'joi';
import { IUser } from '@src/interfaces/db/IUser';

class Controller {

    baseFilter = async (filterQuery: any) => {

        let totalIn: number = 0;
        let totalOut = 0;
        let totalSwapin: number = 0;
        let totalSwapout: number = 0;



        totalIn = (filterQuery.transactionType == "IN" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "IN"}) : 0;
        totalOut = (filterQuery.transactionType == "OUT" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "OUT"}) : 0;
        totalSwapin = (filterQuery.transactionType == "SWAPIN" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "SWAPIN"}) : 0;
        totalSwapout = (filterQuery.transactionType == "SWAPOUT" || (!filterQuery.transactionType)) ? await services.warehouse.transaction.getTotalQuantity({...filterQuery, transactionType: "SWAPOUT"}) : 0;

        const total = (totalIn + totalSwapin) - (totalOut + totalSwapout);
        const _qtyOpname = (filterQuery.lastStockOpname) ? filterQuery.lastStockOpname.quantity : 0;
        const _dateOpname = (filterQuery.lastStockOpname) ? filterQuery.lastStockOpname.dateOpname : null;
        
        const data = {
            listTransactions: await services.warehouse.transaction.getFilterTransaction(filterQuery),
            totalQuantity: {
                dateStart: filterQuery.dateStart,
                dateEnd: filterQuery.dateEnd,
                in: totalIn,
                out: totalOut,
                swapin: totalSwapin,
                swapout: totalSwapout,
                qtyOpname: _qtyOpname,
                dateOpname: _dateOpname,
                all: _qtyOpname+total,
            }
        }
        return data;
    }

    stockByDateByWarehouse = async (itemId?: string, warehouseId?: number, date?: Date) => {
        /** 
         * Input : ItemId:String, WarehouseId:Integer, Date:String
         * Output : Quantity
         * 
        */

        const lastStockOpname = await services.warehouse.stockOpname.getLatestItemOpnameBeforeDate(itemId, warehouseId, date);
        const filterQuery = {
            dateEnd: date,
            dateStart: (lastStockOpname) ? moment(lastStockOpname.createdAt?.toString()).toDate() : undefined,
            itemId: itemId,
            warehouseId: warehouseId,
            transactionType: undefined,
            lastStockOpname: lastStockOpname,
        };
        
        const data = await this.baseFilter(filterQuery);

        return data;
    };

    stockByDateRangeByWarehouse = async (dateEnd?: Date, dateStart?: Date, itemId?: string, warehouseId?: number, transactionType?: string) => {
        /** 
         * Input : ItemId:String, WarehouseId:Integer, dateStart:Date, dateEnd:Date, transactionType:string
         * Output : Quantity
         * 
        */

        const lastStockOpname = await services.warehouse.stockOpname.getLatestItemOpnameBeforeDate(itemId, warehouseId, dateEnd);
        const filterQuery = {
            itemId: itemId,
            dateStart: dateStart,
            dateEnd: dateEnd,
            transactionType: transactionType,
            warehouseId: warehouseId,
            lastStockOpname: lastStockOpname,
        };
        // console.log(filterQuery)
        const data = await this.baseFilter(filterQuery);

        return data;
    };


}

export default new Controller();