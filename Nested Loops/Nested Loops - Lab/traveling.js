function traveling(input) {

    let index = 0;
    let currentInput = input[index];
    let savedMoney = 0;

    while (currentInput !== "End") {
        let destination = input[index++];
       let neededMoney = Number(input[index++]);
        while (savedMoney < neededMoney) {
            currentInput = Number(input[index++]);
            savedMoney += currentInput;
            if (savedMoney >= neededMoney) {
                savedMoney = 0;
                currentInput = input[index]
                console.log(`Going to ${destination}!`);
                break;
            }
        }
    }
}
traveling(["France", "2000", "2000", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt"])



