import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import { options } from 'joi';
import Joi from 'joi';

class Controller extends BaseController{


    requestHandler = async(req: Request, res: Response) => {
        this.sendResponse
    }
}

export default new Controller(); 