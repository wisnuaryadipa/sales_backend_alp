import {Router} from 'express';
import controllers from '@src/controllers';

const api = (app: Router) => {

    const users = Router();
    users.get('/all', controllers.user.userController.index);

    // create prefix
    app.use('/users', users);
}

export default api;