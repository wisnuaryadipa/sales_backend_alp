import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import {services} from '@src/services'
import { options } from 'joi';
import Joi from 'joi';
import { IUser } from '@src/interfaces/db/IUser';

class Controller extends BaseController{

    requestHandler = async (req: Request, res: Response) => {
        const itemId = req.params.itemId;
        const data = await services.warehouse.transaction.getTransactionByItemId(itemId);
        this.sendResponse(req, res, { data });
    }
}

export default new Controller(); 