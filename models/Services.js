const { Model, DataTypes } = require('sequelize');
//need to set up config 
const sequelize = require('../config/connection');

class Services extends Model {}

Services.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desctiption: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        time_slot: {
            type: DataTypes.TIME,
            allowNull: false,
        }
    }
);

module.exports = Services;