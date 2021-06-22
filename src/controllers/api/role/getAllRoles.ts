import { BaseController } from "@src/controllers/baseController";
import { Request, Response } from "express";
import { services } from "@src/services";


class Controller extends BaseController {

    requestHandler = async (req: Request, res: Response) => {
        const data = await services.role.getAllRoles();
        this.sendResponse(req, res, {data})
    }
    
}

export default new Controller();