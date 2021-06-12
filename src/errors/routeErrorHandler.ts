import {Router, ErrorRequestHandler} from 'express';
import {IError} from '@src/interfaces/IError';

export default (expressApp: Router) => {

  
  expressApp.use((req, res, next) => {
    /// catch 404 and forward to error handler
    const err: IError = new Error('Not Found') ;
    err.status = 404;
    next(err);
  });
  
  expressApp.use(((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  }) as ErrorRequestHandler);

  expressApp.use(((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  }) as ErrorRequestHandler);
}