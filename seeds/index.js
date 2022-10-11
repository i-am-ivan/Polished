// includes seeding files

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  // start to seeding database
  

  process.exit(0);
};

seedAll();
