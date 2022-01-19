// Database connection
require('./../config/database');

// Include migration files
const user_migration = require('./user');
const module_migration = require('./module');


// execute all migrations
user_migration();
module_migration();
