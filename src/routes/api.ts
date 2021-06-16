import {Router} from 'express';
import controllers from '@src/controllers';

const api = (app: Router) => {

    const users = Router();
    users.get('/all', controllers.user.userController.index);
    users.get('/all', controllers.user.userController.index);
    users.get('/:userId', controllers.user.userController.index);
    users.put('/:userId', controllers.user.userController.index);
    users.post('/add', controllers.user.userController.index);
    users.delete('/delete', controllers.user.userController.index);

    const roles = Router();
    roles.get('/all', controllers.user.userController.index);
    roles.get('/all', controllers.user.userController.index);
    roles.get('/:roleId', controllers.user.userController.index);
    roles.put('/:roleId', controllers.user.userController.index);
    roles.post('/add', controllers.user.userController.index);
    roles.delete('/delete', controllers.user.userController.index);
    
    const permissions = Router();
    permissions.get('/all', controllers.user.userController.index);
    permissions.get('/all', controllers.user.userController.index);
    permissions.get('/:permissionId', controllers.user.userController.index);
    permissions.put('/:permissionId', controllers.user.userController.index);
    permissions.post('/add', controllers.user.userController.index);
    permissions.delete('/delete', controllers.user.userController.index);

    // create prefix
    app.use('/users', users);
    app.use('roles', roles);
    app.use('/permissions', permissions);
}

export default api;