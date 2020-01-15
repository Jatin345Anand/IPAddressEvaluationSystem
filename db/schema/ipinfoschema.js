const mongoose  = require('../common/connection');
var schema  = mongoose.Schema;
var IPinfo = new schema({});
var IPAddressModel = mongoose.model('ipadresses',IPinfo);
module.exports = IPAddressModel;