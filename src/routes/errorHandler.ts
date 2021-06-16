import {Router, ErrorRequestHandler, Request, Response, NextFunction, Application} from 'express';
import ApplicationError from '@src/errors/applicationError';
import flags from '@src/errors/flags';

const ErrorHandler = (expressApp: Application) => {

    expressApp.use((req, res, next) => { 
        /*
            Middleware ErrorHandling
            Redirect to 404 requested route not found
        */
        const err = new ApplicationError({flag: flags.URI_NOT_FOUND, httpCode: 404})
        next(err); 
    });

    expressApp.use((err:any, req: Request, res: Response, next: NextFunction) => {
        /*
            Middleware ErrorHandling
            If err are not simmilar with ApplicationErro 
            will return error 500 Internal Server Error 
        */
        if (res.headersSent) return next(err)

        if (err instanceof ApplicationError) return res.status(err.status).json(err)
        else {
            return res.status(500).json(new ApplicationError({flag: flags.INTERNAL_SERVER_ERROR, httpCode: 500}))
        }
    });
    
}

export default ErrorHandler;