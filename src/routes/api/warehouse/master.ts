import Router from 'express';
import controllers from '@src/controllers';

const masterRoutes = Router();
masterRoutes.get('/item/search-by-sub-jenis-id', controllers.warehouse.master.item.getItemsBySubJenisId.requestHandler);
masterRoutes.get('/sub-jenis-item/all', controllers.warehouse.master.item.getSubJenisItems.requestHandler);

export default masterRoutes;