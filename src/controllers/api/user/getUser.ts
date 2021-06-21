import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import {services} from '@src/services'
import { options } from 'joi';
import Joi from 'joi';

class Controller extends BaseController{

    requestHandler = async(req: Request, res: Response) => {
        
        const data = services.user.getUserById(req.params.userid);
        this.sendResponse(req, res, { data });
    }
}

export default new Controller(); 