module.exports = {
  // seeds: ['src/database/seeds/**/*{.ts,.js}'],
  type: 'postgres',
  host: 'localhost',
  port: Number(process.env.POSTGRESS_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRESS_PASSWORD,
  database: process.env.POSTGRES_DB,
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
}