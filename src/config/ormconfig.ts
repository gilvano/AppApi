import { ConnectionOptions } from 'typeorm';
 
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'db-postgres',
  port: 5432,
  username: 'entregadb',
  password: 'entregadb',
  database: 'entregadb',
  synchronize: true,
  logging: true,
  entities: [
    'src/entity/*.ts'
  ],
  cli: {
    migrationsDir: 'src/migrations',
  }
};
 
export = config;