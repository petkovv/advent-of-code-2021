const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n')

const measureDepthIncreases = () => {
    let increasesCount = 0;

    for (let i = 1; i <= input.length - 1; i++) {
        const firstComand = Number(input[i - 1]);
        const secondCommand = Number(input[i]);


        if(secondCommand > firstComand) {
            increasesCount++;
        }
        
    }
    console.log(increasesCount);
    return increasesCount;
}

measureDepthIncreases()
