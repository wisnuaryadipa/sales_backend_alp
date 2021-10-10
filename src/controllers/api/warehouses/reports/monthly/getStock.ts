import {Request, Response} from 'express';
import {BaseController} from '@src/controllers/baseController';
import {services} from '@src/services';
import logicController from '@src/controllers/logic'
import moment from 'moment';




class Controller extends BaseController {

    requestHandler = async (req: Request, res: Response) => {
        
        const data = await logicController.warehouses.report.monthly.generator.index();
        this.sendResponse(req, res, {data});
    }

    stockAt20th = async (year: number, month: number) => {
        const warehouses = await services.warehouse.master.warehouses.getAllWarehouse();
        for (const warehouse of warehouses) {
            
            let date = moment().year(year).month(month).date(20).hour(23).minute(59).second(59).format('YYYY-MM-DD');
        }
    }

}

export default new Controller();