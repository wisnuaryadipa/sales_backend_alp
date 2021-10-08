import {Router} from 'express';
import warehouseRoutes from '@src/routes/api/warehouse';
import userControllers from '@src/controllers/api/user';
import roleControllers from '@src/controllers/api/role';

const apiRouter = Router();
apiRouter.use('/warehouse', warehouseRoutes);

const users = Router();
users.get('/all', userControllers.getAllUsers.requestHandler);
users.get('/all', userControllers.getAllUsers.requestHandler);
users.get('/:uid', userControllers.getUser.requestHandler);
users.put('/:uid', userControllers.getAllUsers.requestHandler);
users.post('/add', userControllers.getAllUsers.requestHandler);
users.delete('/delete', userControllers.getAllUsers.requestHandler);

const roles = Router();
roles.get('/all', roleControllers.getAllRoles.requestHandler);
roles.get('/all', userControllers.getAllUsers.requestHandler);
roles.get('/:roleId', roleControllers.getRole.requestHandler);
roles.put('/:roleId', userControllers.getAllUsers.requestHandler);
roles.post('/add', userControllers.getAllUsers.requestHandler);
roles.delete('/delete', userControllers.getAllUsers.requestHandler);

const permissions = Router();
permissions.get('/all', userControllers.getAllUsers.requestHandler);
permissions.get('/all', userControllers.getAllUsers.requestHandler);
permissions.get('/:permissionId', userControllers.getAllUsers.requestHandler);
permissions.put('/:permissionId', userControllers.getAllUsers.requestHandler);
permissions.post('/add', userControllers.getAllUsers.requestHandler);
permissions.delete('/delete', userControllers.getAllUsers.requestHandler);

// create prefix
apiRouter.use('/users', users);
apiRouter.use('/roles', roles);
apiRouter.use('/permissions', permissions);

export default apiRouter;