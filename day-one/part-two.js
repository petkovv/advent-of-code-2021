const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf8').split('\n')

const measureDepthIncreases = () => {
    let increasesCount = 0;

    for (let i = 1; i <= input.length - 3; i++) {
        const firstComand = Number(input[i - 1]);
        const secondCommand = Number(input[i]);
        const thirdCommand = Number(input[i + 1]);
        
        const fourthComand = Number(input[i]);
        const fifthCommand = Number(input[i + 1]);
        const sixthCommand = Number(input[i + 2]);

 
        const firstSum = firstComand + secondCommand + thirdCommand;
        const secondSum = fourthComand + fifthCommand + sixthCommand;

        if(secondSum > firstSum) {
            increasesCount++;
        }
        
    }
    console.log(increasesCount);
    return increasesCount;
}

measureDepthIncreases()
