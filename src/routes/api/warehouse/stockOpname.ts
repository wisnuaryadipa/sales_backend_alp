import Router from 'express';
import controllers from '@src/controllers';

const transactionRoutes = Router();
transactionRoutes.get('/all', controllers.warehouse.transaction.getAllTransactions.requestHandler);
transactionRoutes.get('/latestOpnameBeforeDate', controllers.warehouse.stockOpname.getLatestItemOpnameBeforeDate.requestHandler);

export default transactionRoutes;