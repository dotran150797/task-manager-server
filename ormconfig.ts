export = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
  },
  entities: ['src/entities/*.entity.ts'],
};
