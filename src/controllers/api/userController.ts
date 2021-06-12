import {Request, Response} from 'express';
import {sendResponse} from '@src/controllers/baseController'
import { options } from 'joi';


const userController = {
    index: (req: Request, res: Response) => {
        return sendResponse(req, res, {status : 200})
    },
    
}

export default userController;