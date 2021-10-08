import Router from 'express';
import reportControllers from '@src/controllers/api/warehouses/reports';

const reportRoutes = Router();
reportRoutes.get('/monthly', reportControllers.monthly.getStock.requestHandler);
reportRoutes.get('/test', reportControllers.monthly.getStock.requestHandler);

export default reportRoutes;