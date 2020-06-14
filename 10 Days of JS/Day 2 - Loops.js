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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vovels=['a','e','i','o','u']
    var consonantes=['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

    for(var i in s){
        for(var j in vovels){
            if(s[i]==vovels[j]){
                console.log(s[i])
            }
        }
    }

    for(var i in s){
        for(var j in consonantes){
            if(s[i]==consonantes[j]){
                console.log(s[i])
            }
        }
    }
   
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}