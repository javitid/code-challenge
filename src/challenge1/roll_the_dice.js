#!/usr/bin/env node
const fs = require('fs');
const FILE_ENCODING = 'utf8';
const DIRECTORY = './';

function getInputFileName(args) {
    var file='';
    // Discard 2 first arguments because they are paths
    // Set parameters to uppercase, keep the values as they are in the input
    var args = args || process.argv.slice(2);

    return (args.length > 0) ? args[0] : 'testInput.txt';
}

function readFile(fileName) {
    const data = fs.readFileSync(DIRECTORY + fileName, FILE_ENCODING);
    const arrayData = data.replace(/\r\n/g,'\n').split('\n');
    const numberOfCases = arrayData[0];
    const cases = arrayData.slice(1, Number(arrayData[0]+1));

    return {numberOfCases , cases};
}

function printResult(numberOfCases, cases) {
    for (var i=0; i<numberOfCases; i++) {
        const dices = cases[i].split(':');
        var winValue = (Number(dices[0]) + Number(dices[1]) + 1);
        winValue = winValue > 12 ? '-' : winValue;
        console.log('Case #' + (i+1) + ': ' + winValue);
    }
}

// ** GET INPUT FILE NAME **
const fileName = getInputFileName();

// ** READ FILE DATA **
const {numberOfCases, cases} = readFile(fileName);

// ** PRINT RESULT **
printResult(numberOfCases, cases);