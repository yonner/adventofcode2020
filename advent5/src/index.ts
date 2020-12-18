
//import FileReader from 

import * as fs from 'fs';

function printMessage(msg: string) : void{
    console.log(`Message: ${ msg}`);
}

// if "F" cut by half round down (Math.floor) starting from 127

// if "B" but by half round up (Math.ceil)

function cutDown(low : number, high : number) : number {

    var diff = high - low;

    return Math.floor(diff / 2) + low;
}

function cutUp(low : number, high : number) : number {

    var diff = high - low;

    return high - Math.floor(diff / 2);
}


function findRow(data: string) : number {

    var rowdata = data.substr(0,7);

    var upper = 127;
    var lower = 0;

    rowdata.split('').forEach(character => {
        if (character === 'F') {
            upper = cutDown(lower, upper);
        }
        if (character === 'B') {
            lower = cutUp(lower, upper);
        }

        console.log(`l u ${lower} ${upper}`);
    });

    console.log(` ${rowdata} ${lower} ${upper}`);

    return upper;
}

function findColumn(data: string) : number {
    var coldata = data.substr(7,10);
    
    console.log(`${coldata}`);

    var upper = 7;
    var lower = 0;

    coldata.split('').forEach(character => {
        if (character === 'L') {
            upper = cutDown(lower, upper);
        }
        if (character === 'R') {
            lower = cutUp(lower, upper);
        }

        console.log(`c l u ${lower} ${upper}`);
    });

    console.log(` ${coldata} ${lower} ${upper}`);

    return upper;
} 

function findHighest() {

  fs.readFile('./advent5.txt', "utf8",function read(err, data) {
    if (err) {
        throw err;
    }

    var plane = Array.from(Array(127), () => new Array(8));

    var highest = 0;

    const content = data.replace( /\r\n/g, " " ).split(" ");

    content.forEach(element => {
        var r : number = findRow(element);
        var c : number = findColumn(element);
        if (r * 8 + c > highest)
        {
            highest = r * 8 + c;
        }

        plane[r][c] = 1;

    });

    for(var y=0; y<127; y++){
        console.log(`${y} ${plane[y][0]}${plane[y][1]}${plane[y][2]}${plane[y][3]}${plane[y][4]}${plane[y][5]}${plane[y][6]}${plane[y][7]}`);
    }
    // 633 was my seat number worked out from this string "79 1undefined111111"

    console.log(content);   

    console.log(`highest ${highest}`);

    
  });
}

printMessage(`Hello Jason`);

// 861

findHighest();