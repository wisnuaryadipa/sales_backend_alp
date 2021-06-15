import {Router, ErrorRequestHandler, Request, Response} from 'express';
import ApplicationError from '@src/errors/applicationError';
import flags from '@src/errors/flags';

export default (expressApp: Router) => {
  
  expressApp.use((err: any, _req: Request, res: Response) => {
    /*
      Middleware ErrorHandling
      If err are not simmilar with ApplicationErro 
      will return error 500 Internal Server Error 
    */
    if (err instanceof ApplicationError) res.status(err.status).json(err)
    else {
      res.status(500).json(new ApplicationError({flag: flags.INTERNAL_SERVER_ERROR, httpCode: 500}))
    }
  })
}