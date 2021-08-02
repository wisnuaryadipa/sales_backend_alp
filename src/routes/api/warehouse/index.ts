import {Router} from 'express';
import controllers from '@src/controllers';
import transactionRouter from '@src/routes/api/warehouse/transaction'
import stockOpname from '@src/routes/api/warehouse/stockOpname'
import stock from '@src/routes/api/warehouse/stock'
import master from '@src/routes/api/warehouse/master'

const warehouseRouter = Router();
warehouseRouter.use('/transaction', transactionRouter);
warehouseRouter.use('/stockopname', stockOpname);
warehouseRouter.use('/stock', stock);
warehouseRouter.use('/master', master);

export default warehouseRouter;