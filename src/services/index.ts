import user from '@src/services/user';
import role from '@src/services/role';
import warehouses from '@src/services/warehouses';

export const services = {
    user,
    role,
    warehouse: warehouses,
}