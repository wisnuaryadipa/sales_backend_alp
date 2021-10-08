import { TransactionType } from '@src/interfaces/warehouse/ITransactionType';

import {Request, Response} from 'express';
import { BaseController } from "@src/controllers/baseController";
import {services} from '@src/services'
import moment from 'moment';
import { options } from 'joi';
import Joi from 'joi';
import { IUser } from '@src/interfaces/db/IUser';
import logcicController from 'src/controllers/logic'


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

        const data = await logcicController.warehouses.filter.stockByDateByWarehouse(itemId, warehouseId, date);

        this.sendResponse(req, res, {data})
    }


}

export default new Controller();