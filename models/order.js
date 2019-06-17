// using sequelize in application
const Sequelize = require('sequelize');  // importing sequelize package in order to assign types within model

const sequelize = require('../util/database');  // importing database file where we have configuration setup for sequelize database

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});

module.exports = Order;