import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import {services} from '@src/services'
import { options } from 'joi';
import Joi from 'joi';
import { IUser } from '@src/interfaces/db/IUser';

class Controller extends BaseController{

    requestHandler = async (req: Request, res: Response) => {
        const data: IUser = await services.user.getUserById(req.params.uid);
        console.log(data)
        this.sendResponse(req, res, { data });
    }
}

export default new Controller(); 