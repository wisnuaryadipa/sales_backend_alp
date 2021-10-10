import Router from 'express';
import reportControllers from '@src/controllers/api/warehouses/reports';

const reportRoutes = Router();
reportRoutes.get('/monthly/generateJson', reportControllers.monthly.getStock.requestHandler);
reportRoutes.get('/monthly/exportExcel', reportControllers.monthly.exportExcel.requestHandler);
reportRoutes.get('/test', reportControllers.monthly.getStock.requestHandler);

export default reportRoutes;