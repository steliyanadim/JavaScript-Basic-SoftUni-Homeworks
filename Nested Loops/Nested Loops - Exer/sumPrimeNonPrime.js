function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];

    let divisionCounter = 0;
    let primeNumSum = 0;
    let nonPrimeNum = 0;

    while (command !== "stop") {

        command = Number(input[index]);
        divisionCounter = 0;

        if (command < 0) {
            console.log(`Number is negative.`);
        }

    
       for (i = 1; i <= command; i++) {

            if (command === 0) {
                break;
                }

            if (command % i === 0) {
                divisionCounter++;

                if (i === command &&
                    divisionCounter <= 2) {
                    primeNumSum += command;
                }
                
                if (divisionCounter > 2) {
                    nonPrimeNum += command;
                    divisionCounter = 0;
                    break;
                }
                }

        }
        command = (input[index++]);
    }

    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);

}

sumPrimeNonPrime(["3",
"9",
"0",
"999999997",
"7",
"19",
"4",
"stop"])











