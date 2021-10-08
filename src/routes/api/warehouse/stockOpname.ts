import Router from 'express';
import transactionControllers from '@src/controllers/api/warehouses/transaction';
import stockOpnameControllers from '@src/controllers/api/warehouses/stockOpname';

const transactionRoutes = Router();
transactionRoutes.get('/all', transactionControllers.getAllTransactions.requestHandler);
transactionRoutes.get('/latestOpnameBeforeDate', stockOpnameControllers.getLatestItemOpnameBeforeDate.requestHandler);
transactionRoutes.get('/test', stockOpnameControllers.test.requestHandler);

export default transactionRoutes;