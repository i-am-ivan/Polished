const { Model, DataTypes } = require('sequelize');
//need to set up config
const sequelize = require('../config/connection');

class Appointment_service extends Model {}

Appointment_service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        appointment_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'appointment',
                key: 'id',
              },
        }, 
        service_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'service',
                key: 'id',
              },
        }, 
        technician_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'user', 
                key: 'id',
            }
        }
    }
); 

module.exports = Appointment_service; 