const User = require('./User'); 
const Service = require('./Service'); 
const Appointment = require('./Appointment'); 
const AppointmentService = require('./Appointment_Service'); 

//One appointment belongsTo One customer 
Appointment.belongsTo(User, {
    foreignKey: 'user_id',
})
// Customer hasMany (book) many appointments
User.hasMany(Appointment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Many-to-many relationship between Appointment and Service
Appointment.belongsToMany(Service, { through: AppointmentService, foreignKey: 'appointment_id', onDelete: 'SET NULL'});
Service.belongsToMany(Appointment, { through: AppointmentService, foreignKey: 'service_id', onDelete: 'SET NULL'});

// Technician hasMany AppointmentService bookings
User.hasMany(AppointmentService, {
    foreignKey: "user_id",
    onDelete: "SET NULL",
});

module.exports = { 
    User, 
    Service, 
    Appointment, 
    AppointmentService
}; 

