console.log(`hello world`);

const fs = require('fs'); 

var passports;

// 172

passwords = fs.readFile('advent4.txt', (err, data) => { 
    if (err) throw err; 

    passports = data.toString();

    var props = ['byr','iyr','eyr','hgt','hcl','ecl','pid','cid'];

    var passarr = passports.replace(/(\r\n\r\n)+/gm, ",").replace(/(\r\n)+/gm, " ").split(',');

    var passobj = [];

    var validpasses = 0;

    passarr.forEach( passport =>
    {
        let obj = {};

        if (passport.indexOf(props[0]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[0]));

            if (passport.indexOf(' ', passport.indexOf(props[0])) < passport.indexOf(props[0])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[0]), endpos);

            var year = data.substring(4, data.length);

            if (year.length === 4 && year >= 1920 && year <= 2002) {
                obj.byr = data;
            }
        }

        if (passport.indexOf(props[1]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[1]));

            if (passport.indexOf(' ', passport.indexOf(props[1])) < passport.indexOf(props[1])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[1]), endpos);

            var year = data.substring(4, data.length);

            if (year.length === 4 && year >= 2010 && year <= 2020) {
                obj.iyr = data;
            }
        }

        if (passport.indexOf(props[2]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[2]));

            if (passport.indexOf(' ', passport.indexOf(props[2])) < passport.indexOf(props[2])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[2]), endpos);

            var year = data.substring(4, data.length);

            if (year.length === 4 && year >= 2020 && year <= 2030) {
                obj.eyr = data;
            }
        }

        if (passport.indexOf(props[3]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[3]));

            if (passport.indexOf(' ', passport.indexOf(props[3])) < passport.indexOf(props[3])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[3]), endpos);

            var measure = data.indexOf('cm') === -1 ? data.indexOf('in') : data.indexOf('cm');

            var height = data.substring(4, measure);

            if (( data.indexOf('cm') > -1 ) && (height >= 150) && (height <= 193)) {
                obj.hgt = data;
            }
            if (( data.indexOf('in') > -1 ) && (height >= 59) && (height <= 76)) {
                obj.hgt = data;
            }
        }

        if (passport.indexOf(props[4]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[4]));

            if (passport.indexOf(' ', passport.indexOf(props[4])) < passport.indexOf(props[4])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[4]), endpos);

            var col = data.substring(4, data.length);

            if ((col.length ===7) && (col[0] === '#')) {
                obj.hcl = data;
            }
        }

        if (passport.indexOf(props[5]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[5]));

            if (passport.indexOf(' ', passport.indexOf(props[5])) < passport.indexOf(props[5])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[5]), endpos);

            var col = data.substring(4, data.length);

            if (col === `amb` || col === `blu` || col === `brn` || col === `gry` || col === `grn` || col === `hzl` || col === `oth`) {
                obj.ecl = data;
            }
        }

        if (passport.indexOf(props[6]) > -1) {

            endpos = passport.indexOf(' ', passport.indexOf(props[6]));

            if (passport.indexOf(' ', passport.indexOf(props[6])) < passport.indexOf(props[6])) {
                endpos = passport.length;
            } 

            data = passport.substring(passport.indexOf(props[6]), endpos);

            var id = data.substring(4, data.length);

            if (id.length === 9) {
                obj.pid = data;
            }
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
