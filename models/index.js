'use strict';

const db = require('./db');
const Sequelize = require('sequelize');

const Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
});

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1, max: 5
    }
  },
  amenities: {
    type: Sequelize.STRING
  }
});

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1, max: 5
    }
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = db;


/*

Place

address
city
state
phone (string)
location (lat, lon float array)



Hotel

name
num_stars (integer from 1-5)
amenities (string of comma delimited items)



Activity

name
age_range (data-type string)


Restaurant

name
cuisine (comma delimited string list)
price (integer from 1-5 for how many dollar signs)
Associations




Hotels, activities, and restaurants
should furthermore be associated with
a particular place











*/
