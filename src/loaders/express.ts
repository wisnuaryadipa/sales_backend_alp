import express, { ErrorRequestHandler, NextFunction, Response, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '@src/config';
import routes from '@src/routes/index';
import ErrorHandlerRoute from '@src/routes/errorHandler'
import ApplicationError from '@src/errors/applicationError';
import flags from '@src/errors/flags';


export default ({app}: {app: express.Application}) => {
  
  app.get('/', (req, res) => res.send('Express + TypeScript Server'));
  app.use(config.api.prefix, routes);
  ErrorHandlerRoute(app);
  app.use(cors());
  app.use(bodyParser.json());
};