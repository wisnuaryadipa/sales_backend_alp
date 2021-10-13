import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController'
import logicController from '@src/controllers/logic'
import fs from 'fs';


class Controller extends BaseController {

    requestHandler = async (req: Request, res: Response) => {

        let readFile = fs.readFileSync('./export/report/v5/monthlyReport.json')
        const file = JSON.parse(readFile.toString());
        
        const data = logicController.warehouses.report.monthly.exportExcel.index(file);
        this.sendResponse(req, res, {data});
    }

}

export default new Controller();