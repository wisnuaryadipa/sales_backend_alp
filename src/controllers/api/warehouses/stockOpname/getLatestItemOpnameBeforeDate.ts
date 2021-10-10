import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import {services} from '@src/services'
import { options } from 'joi';
import Joi from 'joi';
import { IUser } from '@src/interfaces/db/IUser';
import moment from 'moment';

class Controller extends BaseController{

    requestHandler = async (req: Request, res: Response) => {
        const itemId = req.query.itemId?.toString();
        const beforeDate = moment(req.query.beforeDate?.toString()).toDate();
        const warehouseId = (req.query.warehouseId?.toString()) ? parseInt(req.query.warehouseId?.toString()) : undefined;

        const data = await services.warehouse.stockOpname.getLatestItemOpnameBeforeDate(itemId, warehouseId, beforeDate);
        this.sendResponse(req, res, { data });

        
    }
}

export default new Controller(); 