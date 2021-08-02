import Router from 'express';
import controllers from '@src/controllers';

const stockRotes = Router();
stockRotes.get('/total/specificdate', controllers.warehouse.stock.getStockbydate.requestHandler);

export default stockRotes;