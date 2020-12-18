"use strict";
//import FileReader from 
exports.__esModule = true;
var fs = require("fs");
function printMessage(msg) {
    console.log("Message: " + msg);
}
// if "F" cut by half round down (Math.floor) starting from 127
// if "B" but by half round up (Math.ceil)
function cutDown(low, high) {
    var diff = high - low;
    return Math.floor(diff / 2) + low;
}
function cutUp(low, high) {
    var diff = high - low;
    return high - Math.floor(diff / 2);
}
function findRow(data) {
    var rowdata = data.substr(0, 7);
    var upper = 127;
    var lower = 0;
    rowdata.split('').forEach(function (character) {
        if (character === 'F') {
            upper = cutDown(lower, upper);
        }
        if (character === 'B') {
            lower = cutUp(lower, upper);
        }
        console.log("l u " + lower + " " + upper);
    });
    console.log(" " + rowdata + " " + lower + " " + upper);
    return upper;
}
function findColumn(data) {
    var coldata = data.substr(7, 10);
    console.log("" + coldata);
    var upper = 7;
    var lower = 0;
    coldata.split('').forEach(function (character) {
        if (character === 'L') {
            upper = cutDown(lower, upper);
        }
        if (character === 'R') {
            lower = cutUp(lower, upper);
        }
        console.log("c l u " + lower + " " + upper);
    });
    console.log(" " + coldata + " " + lower + " " + upper);
    return upper;
}
function findHighest() {
    fs.readFile('./advent5.txt', "utf8", function read(err, data) {
        if (err) {
            throw err;
        }
        var plane = Array.from(Array(127), function () { return new Array(8); });
        var highest = 0;
        var content = data.replace(/\r\n/g, " ").split(" ");
        content.forEach(function (element) {
            var r = findRow(element);
            var c = findColumn(element);
            if (r * 8 + c > highest) {
                highest = r * 8 + c;
            }
            //var val = new Array(c + 1).join(' ') + "x";
            ///val = "x";
            plane[r][c] = 1;
        });
        for (var y = 0; y < 127; y++) {
            console.log(y + " " + plane[y][0] + plane[y][1] + plane[y][2] + plane[y][3] + plane[y][4] + plane[y][5] + plane[y][6] + plane[y][7]);
        }
        console.log(content);
        console.log("highest " + highest);
    });
}
printMessage("Hello Jason");
// 861
findHighest();
