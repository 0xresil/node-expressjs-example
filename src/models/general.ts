import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => sequelize.define('general', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  desc: {
    type: DataTypes.STRING
  }
}, {})