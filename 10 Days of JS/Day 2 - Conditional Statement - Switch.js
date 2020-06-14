'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    var ch;

    if('aeiou'.includes(s[0])){
        ch=1
    }

    else if('bcdfg'.includes(s[0])){
        ch=2
    }

    else if('hjklm'.includes(s[0])){
        ch=3
    }
    else if('npqrstvwxyz'.includes(s[0])){
        ch=4
    }

    else{
        ch=5
    }

    switch (ch){
        case 1: return 'A'
        case 2: return 'B'
        case 3: return 'C'
        case 4: return 'D'
        case 5: return 0
    }    
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}