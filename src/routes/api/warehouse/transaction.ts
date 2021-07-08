import Router from 'express';
import controllers from '@src/controllers';

const transactionRoutes = Router();
transactionRoutes.get('/all', controllers.warehouse.transaction.getAllTransactions.requestHandler);
transactionRoutes.get('/items/:itemId', controllers.warehouse.transaction.getTransactionByItemId.requestHandler);
transactionRoutes.get('/warehouse/:warehouseId', controllers.warehouse.transaction.getTransactionByWarehouseId.requestHandler);
transactionRoutes.get('/type/:type', controllers.warehouse.transaction.getTransactionByType.requestHandler);
transactionRoutes.get('/filter', controllers.warehouse.transaction.getFilteredTransaction.requestHandler);

export default transactionRoutes;