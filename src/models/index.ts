import dbConfig from '../db.config.json';
import { Sequelize, Dialect } from 'sequelize';
import GeneralModel from './general';
import WeaponModel from './weapon';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect as Dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

export default {
  Sequelize,
  sequelize,
  GeneralModel,
  WeaponModel
}