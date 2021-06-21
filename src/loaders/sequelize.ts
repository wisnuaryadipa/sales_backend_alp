import {Sequelize} from 'sequelize';
import config from '../config/sequelize'

const sequelizeConnection = new Sequelize(config.database, config.username, config.password, config);

export default sequelizeConnection;