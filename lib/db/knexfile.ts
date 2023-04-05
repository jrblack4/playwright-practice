import { Knex } from "knex";
import { config } from 'dotenv';

config({ path: '.env.db.env' });

const knexConfig: Knex.Config = {
  client: "pg",
  connection: {
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_DATABASE}`,
    ssl: {}
  },

};

export default knexConfig
