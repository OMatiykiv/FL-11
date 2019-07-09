const firstMaxRange = 8;
const startPrize = 100;
const increasingRange = 4;
const leverNum = 0.5;
const shiftNum = 2;
const shiftExtendLever = 4;

if (confirm('Do you want to play a game?')) {
    do {
        let totalPrize = 0;
        let currentPrize = 0;
        let round = 1;
        let number = 0;
        let x = 0;

        do {
            let maxRange = firstMaxRange + (round - 1) * increasingRange;

            // using this formula creates identical chance of selecting any number
            x = Math.round(Math.random() * (maxRange + 1) - leverNum);

            for (let attemptsLeft = 3; attemptsLeft >= 1; attemptsLeft--) {
                    let shiftExtend = attemptsLeft + round - shiftExtendLever;
                    currentPrize = startPrize * Math.pow(shiftNum, shiftExtend); 
                    number = +prompt('Choose a roulette pocket number from 0 to ' + maxRange +
                        '\nAttempts left: ' + attemptsLeft +
                        '\nTotal Prize: ' + totalPrize + '$' + 
                        '\nPossible prize on current attempt: ' + currentPrize + '$', '');

                if (number === x) {
                    totalPrize += currentPrize;
                    attemptsLeft = 0;
                    round++;
                } else {
                    totalPrize = 0; 
                }
            } 
        } while (number === x && confirm('Congratulation, you won! Your prize is: ' + totalPrize + '$' +
            '\nDo you want to continue?'));

        alert('Thank you for a participation. Your prize is: ' + totalPrize + '$');
    } while (confirm('Do you want to play again?'));
} else {
    alert('You did not become a billionaire, but can.');
}