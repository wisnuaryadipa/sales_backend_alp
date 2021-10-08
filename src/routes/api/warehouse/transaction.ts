import Router from 'express';
import transactionControllers from '@src/controllers/api/warehouses/transaction';

const transactionRoutes = Router();
transactionRoutes.get('/all', transactionControllers.getAllTransactions.requestHandler);
transactionRoutes.get('/items/:itemId', transactionControllers.getTransactionByItemId.requestHandler);
transactionRoutes.get('/warehouse/:warehouseId', transactionControllers.getTransactionByWarehouseId.requestHandler);
transactionRoutes.get('/type/:type', transactionControllers.getTransactionByType.requestHandler);
transactionRoutes.get('/filter', transactionControllers.getFilteredTransaction.requestHandler);

export default transactionRoutes;