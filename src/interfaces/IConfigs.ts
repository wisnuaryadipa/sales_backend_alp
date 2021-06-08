import config from '../config';


type IConfig = typeof config;

interface IDBEnv {
    development: IDBType;
    production: IDBType;
    test: IDBType;
}

interface IDBType {
    postgres?: IDBPostgres;
    mysql?: IDBPostgres;
}

interface IDBPostgres {
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    host: string | undefined;
    schema?: string | undefined;

}

export {IConfig, IDBType, IDBEnv, IDBPostgres};