import express from 'express';
import config from '@src/config';
import Logger from '@src/loaders/logger';
import loader from '@src/loaders';


import './injection/module/ProcessEnv'
// rest of the code remains same

async function startServer() {
    const app = express();
    await loader({ expressApp: app }); // Load all middleware and routes
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