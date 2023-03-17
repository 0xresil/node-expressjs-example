import { Sequelize, DataTypes } from "sequelize";

export default (sequelize: Sequelize) => sequelize.define('weapon', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  desc: {
    type: DataTypes.STRING
  },
  attr: {
    type: DataTypes.JSON
  },
  quantity: {
    type: DataTypes.INTEGER
  }
}, {})