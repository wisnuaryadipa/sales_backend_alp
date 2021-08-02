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
        
        const subJenisId = req.query.subJenisId ? req.query.subJenisId.toString() : " ";
        const data = await services.warehouse.master.item.getItemsBySubJenisId(subJenisId);
        this.sendResponse(req, res, {data})
    }


}

export default new Controller();