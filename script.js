const prompt = require('prompt-sync') ({sigint: true});

let playAgain = true;

console.log("Welcome to the Trivia Game!");

while (playAgain) {
    let score = 0;

    for(let i = 1; i <= 10; i++) {
        let question;
        let option1;
        let option2;
        let option3;
        let option4;
        let answer;
        if (i === 1) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        } 
        else if (i === 2) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 3) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 4) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 5) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 6) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 7) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 8) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 9) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        else if (i === 10) {
            question = "What is the answer?";
            option1 = "One";
            option2 = "Two";
            option3 = "Three";
            option4 = "Four";
            answer = 1;
        }
        console.log(question);
        console.log(option1);
        console.log(option2);
        console.log(option3);
        console.log(option4);
        let userAnswer = Number(prompt('Enter the number of your answer: '));

        if (userAnswer === answer) {
            console.log("Great job!");
            score++;
        }

    }
  
}