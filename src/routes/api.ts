import {Router} from 'express';
import controllers from '@src/controllers';

const api = (app: Router) => {

    const users = Router();
    users.get('/all', controllers.user.getAllUsers.requestHandler);
    users.get('/all', controllers.user.getAllUsers.requestHandler);
    users.get('/:uid', controllers.user.getUser.requestHandler);
    users.put('/:uid', controllers.user.getAllUsers.requestHandler);
    users.post('/add', controllers.user.getAllUsers.requestHandler);
    users.delete('/delete', controllers.user.getAllUsers.requestHandler);

    const roles = Router();
    roles.get('/all', controllers.role.getAllRoles.requestHandler);
    roles.get('/all', controllers.user.getAllUsers.requestHandler);
    roles.get('/:roleId', controllers.user.getAllUsers.requestHandler);
    roles.put('/:roleId', controllers.user.getAllUsers.requestHandler);
    roles.post('/add', controllers.user.getAllUsers.requestHandler);
    roles.delete('/delete', controllers.user.getAllUsers.requestHandler);
    
    const permissions = Router();
    permissions.get('/all', controllers.user.getAllUsers.requestHandler);
    permissions.get('/all', controllers.user.getAllUsers.requestHandler);
    permissions.get('/:permissionId', controllers.user.getAllUsers.requestHandler);
    permissions.put('/:permissionId', controllers.user.getAllUsers.requestHandler);
    permissions.post('/add', controllers.user.getAllUsers.requestHandler);
    permissions.delete('/delete', controllers.user.getAllUsers.requestHandler);

    // create prefix
    app.use('/users', users);
    app.use('/roles', roles);
    app.use('/permissions', permissions);
}

export default api;