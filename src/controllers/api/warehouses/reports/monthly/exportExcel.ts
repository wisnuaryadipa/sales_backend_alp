import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import logicController from '@src/controllers/logic'


class Controller extends BaseController {

    requestHandler = async (req: Request, res: Response) => {
        
        const data = logicController.warehouses.report.monthly.exportExcel.index('reportMonth.xlsx');
        this.sendResponse(req, res, {data});
    }

}

export default new Controller();