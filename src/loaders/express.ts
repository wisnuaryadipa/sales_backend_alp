import express, { ErrorRequestHandler, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '@src/config';
import routes from '@src/routes/index';


export default ({app}: {app: express.Application}) => {
  
  app.get('/', (req, res) => res.send('Express + TypeScript Server'));
  app.use(config.api.prefix, routes())
  app.use(cors());
  app.use(bodyParser.json());

};