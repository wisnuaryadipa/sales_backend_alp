import {Router, ErrorRequestHandler, Request, Response, NextFunction, Application} from 'express';
import ApplicationError from '@src/errors/applicationError';
import flags from '@src/errors/flags';

const ErrorHandler = (expressApp: Application) => {

    expressApp.use((req, res, next) => { 
        const err = new ApplicationError({})
        next(req); 
    });

    expressApp.use((err:any, req: Request, res: Response, next: NextFunction) => {
        if (res.headersSent) return next(err)
        /*
            Middleware ErrorHandling
            If err are not simmilar with ApplicationErro 
            will return error 500 Internal Server Error 
        */
        if (err instanceof ApplicationError) return res.status(err.status).json(err)
        else {
            return res.status(500).json(new ApplicationError({flag: flags.INTERNAL_SERVER_ERROR, httpCode: 500}))
        }
    });
    
}

export default ErrorHandler;