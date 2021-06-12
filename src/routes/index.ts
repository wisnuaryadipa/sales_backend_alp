import {Router} from 'express';
import api from './api';
import web from './web';

const router = () => {
    const app = Router();
    api(app)
    web(app)
    
    return app;
}

export default router;