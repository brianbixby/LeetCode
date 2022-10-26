"use strict";

const seedProfiles = require('./profileSeeds');
const seedComments = require('./commentSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedProfiles();
    console.log('\n----- Profiles SEEDED -----\n');

    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
};

seedAll();