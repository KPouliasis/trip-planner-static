'use strict';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/trip-planner-static');

module.exports = db;
