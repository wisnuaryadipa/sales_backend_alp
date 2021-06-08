import expressLoader from './express';
import sequelizeLoader from './sequelize'
import express from 'express';
import Logger from './logger';


const loaders = async ({expressApp} : {expressApp: express.Application}) => {

    const sequalizeConect = sequelizeLoader().authenticate();
    sequalizeConect;
    Logger.info('✌️ DB loaded and connected!');

    await expressLoader(expressApp)
}

export default loaders;