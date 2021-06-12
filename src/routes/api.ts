import {Router} from 'express';
import controllers from '../controllers';

const route = Router();
const api = (app: Router) => {

    app.use('/api', route);

    route.get('/user', controllers.user.userController.index);
    
}

export default api;