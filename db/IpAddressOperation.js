const IP = require('./schema/ipinfoschema');
const SINGLEIPOUTPUT = require('../model/oneipoutputoperation');
const IPOPERATIONS = {
    data :{},
    FindbyIPS(req, res, ip) {
        console.log('In S operation..', ip);
        IP.findOne({ 'start_ip_int': ip }, (e, d) => {
            console.log(d);
            console.log(d[0]);
        });
    },
    FindbyIPE(req, res, ip) {
        console.log('In E operation..', ip);
        IP.findOne({ 'end_ip_int': ip }, (e, d) => {
            console.log(d);
            console.log(d[0]);
        });
    },
    FindbyIPSE(req, res, ips, ipe) {
        console.log('In S E operation..', ips, ipe);
        IP.findOne({ $and: [{ 'start_ip_int': ips }, { 'end_ip_int': ipe }] }, (e, d) => {
            console.log(d);
            console.log(d[0]);
        });
    },
    async firstAsync() {
        let promise = new Promise((res, rej) => {

            setTimeout(() => res("Now it's done!"), 1000)
        });
    
        // wait until the promise returns us a value
        let result = await promise.then(); 
      
        // "Now it's done!"
        return result;
    },
     TakeIPObject (ip) {
        // var DB = IP.find();
        // DB.forEach(element => {
        //     console.log(element)
        // });
        IP.findOne({ 'start_ip_int': parseInt(ip) - 0 }, (e, d) => {
            // console.log('data is ',d);
            // console.log(e);
            // console.log(n);
            if (d) {
              this.data = d;
            }
            return d;
            // return d;
        });
        // console.log('data in TakeIP ', this.data);
        // return this.data;
    },
    FindbyIP(req, res, ip) {
        var isAccess = false;
        console.log('In operation..', ip);
        var data = {};
        IP.findOne({$and: [{ 'start_ip_int': { $lte : parseInt(ip) }}, { 'end_ip_int': { $gte : parseInt(ip) }}]},(e,d)=>{
                    if(e){
                        console.log(e);
                    }
                    // console.log(d);
                    // console.log(d[0]);
                    // SINGLEIPOUTPUT.GetDatafromObj(d);
                    // isAccess=true;
                    // data = d;    
                    res.render('ipoutput',{OBJ:d,IP:ip});
              });
        // // IP.find().forEach( function(myDoc) { ( "user: " + myDoc.start_ip_int ); } );
        // var i=0;
        // while(i<10){
        //     console.log(this.firstAsync());
        //     // console.log(this.TakeIPObject(ip+i));
        //     i++;
        // }
        // this.TakeIPObject(ip);  
    }
}
module.exports = IPOPERATIONS;