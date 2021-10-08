import config from '@src/config'
import {IDBEnv, IDBType} from '@src/interfaces/IConfigs'

const env = (process.env.NODE_ENV || 'development');
const dbConfig: IDBType = config.db[env];

const sequelize : any = {
    "host": dbConfig.postgres?.host,
    "username": dbConfig.postgres?.username || "",
    "password": dbConfig.postgres?.password,
    "database": dbConfig.postgres?.database || "",
    "schema": dbConfig.postgres?.schema || "",
    "dialect": "postgres",
    "logging": false,
    "timezone": "+07:00",
    "operatorsAliases": false,
    "define": {
        "freezeTableName": true
    },
    "query": { "raw": true },
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 20000,
      "idle": 5000,
      "evict": 1000
    }
}

export default sequelize;