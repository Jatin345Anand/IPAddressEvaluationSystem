const mongoose = require('mongoose');
const dbconfig = require('./config');
mongoose.connect(dbconfig.dbURL,{ useNewUrlParser: true });
module.exports = mongoose;