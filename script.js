const prompt = require('prompt-sync') ({sigint: true});

let playAgain = true;





console.log("             |\\");
console.log("---|\\--------|-\\\\-----        __  __           _        _____     _       _       _ ");
console.log("---|/-------0---\\|----       |  \\/  |_   _ ___(_) ___  |_   _| __(_)_   _(_) __ _| |");
console.log("--/|-------------|----       | |\\/| | | | / __| |/ __|   | || '__| \\ \\ / / |/ _` | |");
console.log("-|-/-\\----------0-----       | |  | | |_| \\__ \\ | (__    | || |  | |\\ V /| | (_| |_|");
console.log("--\\|/-----------------       |_|  |_|\\__,_|___/_|\\___|   |_||_|  |_| \\_/ |_|\\__,_(_)");
console.log("======================================================================================");
console.log("                ~~~      𝄞 Welcome to the Music History Quiz! 𝄢    ~~~ ")
console.log("                -----------------------------------------------------");
console.log("                                 ** INSTRUCTIONS ** ");
console.log("                   - You will be asked 10 multiple choice questions  ");
console.log("                   - Please enter the number of your answer (1, 2, 3, or 4)  ");
console.log("                   - After each question, you will receive feedback on  ");
console.log("                      whether your answer was correct or incorrect");
console.log("                   - At the end of the quiz, you will see your final score");
console.log("\n");
console.log("                                HAVE FUN AND GOOD LUCK!!");
console.log("======================================================================================");

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
            question = "How many symphonies did Beethoven write?";
            option1 = "1. 10";
            option2 = "2. 20";
            option3 = "3. 9";
            option4 = "4. 8";
            answer = 3;
        } 
        else if (i === 2) {
            console.log("=======================================================");
            question = "Which composer wrote the music for the ballet Swan Lake?";
            option1 = "1. Rachmaninoff";
            option2 = "2. Tchaikovsky";
            option3 = "3. Stravinsky";
            option4 = "4. Rimsky-Korsakov";
            answer = 2;
        }
        else if (i === 3) {
            console.log("=======================================================");
            question = "Which instrument did Frederick Chopin write most of his music for?";
            option1 = "1. Piano";
            option2 = "2. Violin";
            option3 = "3. Flute";
            option4 = "4. Cello";
            answer = 1;
        }
        else if (i === 4) {
            console.log("=======================================================");
            question = "Which Italian born composer is famous for writing nearly 40 operas?";
            option1 = "1. Vivaldi";
            option2 = "2. Peri";
            option3 = "3. Verdi";
            option4 = "4. Rossini";
            answer = 4;
        }
        else if (i === 5) {
            console.log("=======================================================");
            question = "Who was the first composer to write a symphony that included the trombone?";
            option1 = "1. Mozart";
            option2 = "2. Beethoven";
            option3 = "3. Mahler";
            option4 = "4. Brahms";
            answer = 2;
        }
        else if (i === 6) {
            console.log("=======================================================");
            question = "How many solo concertos did Vivaldi write for the bassoon?";
            option1 = "1. 23";
            option2 = "2. 39";
            option3 = "3. 14";
            option4 = "4. 33";
            answer = 2;
        }
        else if (i === 7) {
            console.log("=======================================================");
            question = "How old was Mozart when he wrote his first complete symphony?";
            option1 = "1. 8";
            option2 = "2. 16";
            option3 = "3. 21";
            option4 = "4. 25";
            answer = 1;
        }
        else if (i === 8) {
            console.log("=======================================================");
            question = "Which female composer was famous for writing medieval music?";
            option1 = "1. Barbara Strozzi";
            option2 = "2. Mariana Martines";
            option3 = "3. Louise Farrenc";
            option4 = "4. Hildegard of Bingen";
            answer = 4;
        }
        else if (i === 9) {
            console.log("=======================================================");
            question = "When was the modern violin invented?";
            option1 = "1. Mid-1600s";
            option2 = "2. Late 1400s";
            option3 = "3. Early 1500s";
            option4 = "4. Late 1500s";
            answer = 3;
        }
        else if (i === 10) {
            console.log("=======================================================");
            question = "Which famous piece written by Stravinsky caused a riot at its premiere?";
            option1 = "1. The Rite of Spring";
            option2 = "2. Pulcinella";
            option3 = "3. The Firebird";
            option4 = "4. Petrushka";
            answer = 1;
        }
        console.log(question);
        console.log(option1);
        console.log(option2);
        console.log(option3);
        console.log(option4);
        let userAnswer = Number(prompt('Enter the number of your answer: '));

        if (userAnswer === answer) {
            console.log("\u001b[32m Correct! \u001b[37m");
            score++;
        } else {
            console.log("\u001b[31m Incorrect! \u001b[37m The correct answer is: " + answer);
        }

    }
    console.log("=======================================================");
    if (score == 10) {
        console.log(`Congratulations on a perfect score! Your score is ${score} out of 10`);
    } else if (score == 9 || score == 8) {
        console.log(`Great job! Your score is ${score} out of 10`);
    } else if (score == 7 || score == 6) {
        console.log(`Not bad! Your score is ${score} out of 10`);
    } else if (score <= 5) {
        console.log(`Your score is ${score} out of 10 - hopefully you got some good learning out of this quiz!`);
    }
    console.log("=======================================================");
    playAgain = prompt("Would you like to play again (yes/no)? ");
    if (playAgain == "yes") {
        console.log("\n");
        playAgain;
    } else if (playAgain == "no") {
        playAgain = false;
        console.log("\n");
        console.log(" _______ _                 _           __             _____  _             _             _ ");
        console.log("|__   __| |               | |         / _|           |  __ \\| |           (_)           | |");
        console.log("   | |  | |__   __ _ _ __ | | _____  | |_ ___  _ __  | |__) | | __ _ _   _ _ _ __   __ _| | ");
        console.log("   | |  | '_ \\ / _` | '_ \\| |/ / __| |  _/ _ \\| '__| |  ___/| |/ _` | | | | | '_ \\ / _` | | ");
        console.log("   | |  | | | | (_| | | | |   <\\__ \\ | || (_) | |    | |    | | (_| | |_| | | | | | (_| |_|   ");
        console.log("   |_|  |_| |_|\\__,_|_| |_|_|\\_\\___/ |_| \\___/|_|    |_|    |_|\\__,_|\\__, |_|_| |_|\\__, (_)  ");
        console.log("                                                                      __/ |         __/ |     ");
        console.log("                                                                     |___/         |___/    ");
        console.log("\n");
        console.log("___                                                         |");
        console.log("____|\\_____/_____________________|_______________________|___________|___|___..");
        console.log("____|/___ _)__________@______|___|________|______________|__|___@____|___|___||");
        console.log("___/|____====____|___|_______|___|____@___|___@__@__@____|__|__|____@____|___||");
        console.log("__|_/_\\___/|_____|___|___@___|__O____|____|__|__|__|____@___|__|________@____||");
        console.log("___\\|/___'-|_____|___|__|____|_______|____|__|__|__|________|__|_____________||");
        console.log("    /      |    O     \\ |            |       |  |  |                           ");
        console.log("                       \\|                    `--3--'                           ");
        break;
    }

}
