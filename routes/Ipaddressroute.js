const express = require('express');
const iproutes = express.Router();
const path = require('path');
const ipoperations = require('../db/IpAddressOperation');
function CreateDecimalIP(ddip) {
    var lddip = ddip.split('.');
    var dip = 0;
    var j = 3;
    for (var i = 0; i < lddip.length; i++) {
        dip = dip + (parseInt(lddip[i]) * Math.pow(256, j));
        j--;
    }
    console.log(dip);
    return dip;
}
iproutes.post('/dosearch', (req, res) => {
    console.log('In do search...', req.body);
    var ip = req.body.ip1;
    // var sdip = req.body.ip1;
    // var edip = req.body.ip2;
    // var ddsip = req.body.ipdd1;
    // var ddeip = req.body.ipdd2;
    // if (req.body.selmonth == 1) {
    //     ipoperations.FindbyIPS(req, res, CreateDecimalIP(ddsip));
    // }
    // if (req.body.selmonth == 2) {
    //     ipoperations.FindbyIPE(req, res, CreateDecimalIP(ddeip));
    // }
    // if (req.body.selmonth == 3) {
    //     ipoperations.FindbyIPSE(req, res, CreateDecimalIP(ddsip), CreateDecimalIP(ddeip));
    // }
    // if (req.body.selmonth == 4){
    //     ipoperations.FindbyIPS(req,res,sdip);
    // }
    // if(req.body.selmonth==5){
    //     ipoperations.FindbyIPE(req,res,edip);
    // }
    // if(req.body.selmonth==6){
    //     ipoperations.FindbyIPSE(req,res,sdip,edip);
    // } 
    if(ip.length==8){
        ipoperations.FindbyIP(req,res,ip);
    }
    else if(ip.length<8 && ip.length>0){
        // res.sendfile();
        res.sendfile('output2.html', { root: path.join(__dirname, '../public/pages/') });
    }
    else{
        res.sendFile('output.html', { root: path.join(__dirname, '../public/pages/') });
        // res.sendFile( "/public/pages/" + "output.html" );
        // res.sendFile('../public/pages/output.html', { root : __dirname});   
    }
 
});
module.exports = iproutes;