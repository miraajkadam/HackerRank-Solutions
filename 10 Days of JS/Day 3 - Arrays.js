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

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var unique=[]
    for(var i=0;i< nums.length;i++){
        if(unique.includes(nums[i])==false){
            unique.push(nums[i])        
        }    
    }

    var temp

    for(var j=0;j<unique.length;j++){
        for(i=0;i<unique.length;i++){
            if(unique[i]<unique[i+1]){
                temp=unique[i]
                unique[i]=unique[i+1];
                unique[i+1]=temp
            }
        }

    }

    return(unique[1])
    }


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}