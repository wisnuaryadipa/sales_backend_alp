import express from 'express';
import config from './config';
import Logger from './loaders/logger';
import loader from './loaders';


import './injection/module/ProcessEnv'
// rest of the code remains same

async function startServer() {
    const app = express();
    
    await loader({ expressApp: app });

    app.get('/', (req, res) => res.send('Express + TypeScript Server'));
    
    app.listen(config.port, () => {
        Logger.info(`
        ################################################
        🛡️  Server listening on port: ${config.port} 🛡️
        ################################################
        `);
    }).on('error', err => {
        Logger.error(err);
        process.exit(1);
    })

}

startServer();