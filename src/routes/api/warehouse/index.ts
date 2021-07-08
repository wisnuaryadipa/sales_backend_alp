import {Router} from 'express';
import controllers from '@src/controllers';
import transactionRouter from '@src/routes/api/warehouse/transaction'

const warehouseRouter = Router();
warehouseRouter.use('/transaction', transactionRouter);

export default warehouseRouter;