const { Model, DataTypes } = require('sequelize');
//need to set up config
const sequelize = require('../config/connection');

class Appointment extends Model {}

Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time_slot: { //need to double check this 
            type: DataTypes.TIME,
            allowNull: false,
            references: {
                model: 'services',
                key: 'time_slot',
            }
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
              },
        },

    }
);

module.exports = Appointment; 