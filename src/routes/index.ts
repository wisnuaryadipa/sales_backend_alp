import {Router} from 'express';
import api from '@src/routes/api';
import web from '@src/routes/web';

const router = Router();
api(router);

export default router;