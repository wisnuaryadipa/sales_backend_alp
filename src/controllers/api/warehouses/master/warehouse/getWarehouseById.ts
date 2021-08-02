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
        
        const data = services.warehouse.master.subJenisItem.getAllSubJenisItems();
        this.sendResponse(req, res, {data})
    }


}

export default new Controller();