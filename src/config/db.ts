//import Sequelize from 'sequelize';
import dotenv from "dotenv";
import { DB } from "../interface";
import { Options, Sequelize } from "sequelize";
dotenv.config();

const db = new Sequelize("db_soplay", "root", "admin", {
  host: "127.0.0.1",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
