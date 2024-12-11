const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("AVAILABLE", "BORROWED"),
      allowNull: true,
      defaultValue: "AVAILABLE",
    },
  },
  {
    timestamps: true,
    tableName: "books",
    underscored: true,
  }
);

module.exports = Book;
