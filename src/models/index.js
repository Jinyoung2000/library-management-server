
const Book = require('./book');
const sequelize = require('../configs/database');

const models = {
  Book,
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

module.exports = models;