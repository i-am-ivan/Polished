const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AppointmentService extends Model {}

AppointmentService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        appointment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'appointment',
                key: 'id',
              },
        }, 
        service_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'service',
                key: 'id',
              },
        },
        technician_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
            references: {
                model: 'user', 
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointmentservice',
    }
); 

module.exports = AppointmentService; 