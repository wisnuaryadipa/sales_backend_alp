import {Request, Response} from 'express';
import {sendResponse} from '@src/controllers/baseController'
import { options } from 'joi';
import Joi from 'joi';

const requestValidationSchema = {
    body: Joi.object({}),
    query: Joi.object({}),
    header: Joi.object({}).unknown(),
  }

const userController = {
    index: (req: Request, res: Response) => {
        return sendResponse(req, res, {status : 200})
    },
    requestHandler : (req: Request, res: Response) => {
        
    }
    
}

export default userController;