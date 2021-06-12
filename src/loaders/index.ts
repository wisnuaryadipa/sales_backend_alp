import expressLoader from './express';
import sequelizeLoader from './sequelize'
import express from 'express';
import Logger from './logger';


const loaders = async ({expressApp} : {expressApp: express.Application}) => {

    const sequalizeConection = sequelizeLoader().authenticate();
    sequalizeConection;
    Logger.info('✌️ DB loaded and connected!');
    
    await expressLoader({app: expressApp});

}

export default loaders;