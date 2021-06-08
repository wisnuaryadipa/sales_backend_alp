import {Sequelize} from 'sequelize';
import config from '../config/sequelize'

export default () => {
    const sequelizeConnection = new Sequelize(config.database, config.username, config.password, config);
    return sequelizeConnection;
}