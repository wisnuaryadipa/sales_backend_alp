import Router from 'express';
import masterControllers from '@src/controllers/api/warehouses/master';

const masterRoutes = Router();
masterRoutes.get('/item/search-by-sub-jenis-id', masterControllers.item.getItemsBySubJenisId.requestHandler);
masterRoutes.get('/sub-jenis-item/all', masterControllers.item.getSubJenisItems.requestHandler);

export default masterRoutes;