import express, { ErrorRequestHandler, NextFunction, Response, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '@src/config';
import apiRouter from '@src/routes/api/index';
import webRouter from '@src/routes/web/index';
import ErrorHandlerRoute from '@src/routes/errorHandler'
import ApplicationError from '@src/errors/applicationError';
import flags from '@src/errors/flags';


export default ({app}: {app: express.Application}) => {
  
  app.use(cors());
  app.get('/', (req, res) => res.send('Express + TypeScript Server'));
  app.use(config.api.prefix, apiRouter);
  app.use('/web', webRouter);
  ErrorHandlerRoute(app);
  app.use(bodyParser.json());
};