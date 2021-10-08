import Router from 'express';
import stockControllers from '@src/controllers/api/warehouses/stock';

const stockRotes = Router();
stockRotes.get('/total/specificdate', stockControllers.getStockbydate.requestHandler);

export default stockRotes;