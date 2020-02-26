const cors = (request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    response.setHeader("Content-Type", "text/html");
    // response.write("<p>Hello World</p>");
    // response.end();
    next();
}
module.exports = cors; 