const mongoose = require('mongoose');
const dbconfig = require('./config');
mongoose.connect(dbconfig.dbURL);
module.exports = mongoose;