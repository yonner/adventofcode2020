console.log(`hello world`);

const fs = require('fs'); 
const { domainToASCII } = require('url');

var passports;

// 237

passwords = fs.readFile('advent4.txt', (err, data) => { 
    if (err) throw err; 

    passports = data.toString();

    var props = ['byr','iyr','eyr','hgt','hcl','ecl','pid','cid'];

    var passarr = passports.replace(/(\r\n\r\n)+/gm, ",").replace(/(\r\n)+/gm, " ").split(',');

    var passobj = [];

    var validpasses = 0;

    var validpassesPart2 = 0;

    passarr.forEach( passport =>
    {
        let obj = {};

        if (passport.indexOf(props[0]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[0]));

            if (passport.indexOf(' ', passport.indexOf(props[0])) < passport.indexOf(props[0])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[0]), endpos);
            obj.byr = data;
        }

        if (passport.indexOf(props[1]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[1]));

            if (passport.indexOf(' ', passport.indexOf(props[1])) < passport.indexOf(props[1])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[1]), endpos);
            obj.iyr = data;
        }

        if (passport.indexOf(props[2]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[2]));

            if (passport.indexOf(' ', passport.indexOf(props[2])) < passport.indexOf(props[2])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[2]), endpos);
            obj.eyr = data;
        }

        if (passport.indexOf(props[3]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[3]));

            if (passport.indexOf(' ', passport.indexOf(props[3])) < passport.indexOf(props[3])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[3]), endpos);
            obj.hgt = data;
        }

        if (passport.indexOf(props[4]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[4]));

            if (passport.indexOf(' ', passport.indexOf(props[4])) < passport.indexOf(props[4])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[4]), endpos);
            obj.hcl = data;
        }

        if (passport.indexOf(props[5]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[5]));

            if (passport.indexOf(' ', passport.indexOf(props[5])) < passport.indexOf(props[5])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[5]), endpos);
            obj.ecl = data;
        }

        if (passport.indexOf(props[6]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[6]));

            if (passport.indexOf(' ', passport.indexOf(props[6])) < passport.indexOf(props[6])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[6]), endpos);
            obj.pid = data;
        }

        if (passport.indexOf(props[7]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[7]));

            if (passport.indexOf(' ', passport.indexOf(props[7])) < passport.indexOf(props[7])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[7]), endpos);
            obj.cid = data;
        }

        passobj.push(obj);

        var keys = Object.keys(obj);

        if (keys.length === 8) {
            validpasses++;
        }

        if (keys.length === 7 && keys.includes('cid')!== true) {
            validpasses++;

            console.log(`** pass ${passport}`);
        } 
        


    });

    console.log(`valid passes ${validpasses}`);

    //console.log(`${passarr}`);
}) 
