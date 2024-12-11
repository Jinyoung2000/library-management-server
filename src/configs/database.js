const { Sequelize } = require("sequelize");
const dbConfig = require("./mysql.config");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: console.log,
});

// DB 연결 및 모델 동기화
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB 연결 성공!");
    
    // models/index.js를 통해 모든 모델을 로드
    require('../models');
    
    await sequelize.sync({ force: false });
    console.log("모델 동기화 완료!");
  } catch (error) {
    console.error("DB 연결/동기화 실패:", error);
  }
};

initializeDatabase();

module.exports = sequelize;