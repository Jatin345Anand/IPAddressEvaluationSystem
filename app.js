const express = require('express');
const jade = require('jade');
const HB = require('handlebars');
const HBR = require('handlebars/runtime');
const pug = require('pug');
const bodyparser = require('body-parser');
const app = express();
const userRoute = require('./routes/Ipaddressroute');
const CORS = require('./utils/middlewares/cors');
const ejs = require('ejs');
// const ejslint = require('ejs-lint');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json()); 
app.use(CORS);
app.use("/", userRoute);
app.set('view engine','ejs');
// ejslint.lint();
app.listen(process.env.PORT || 1234, () => {
    console.log('Server start...');
});