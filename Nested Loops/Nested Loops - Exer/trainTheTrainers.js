function trainTheTrainers(input){
    index = 0;
    let judges = Number(input[index++]);
    let currentInput = input[index];
    let theme = "";
    let themeCounter = 0;
    let gradeTotal = 0;
    let gradeTotalSum =0;

    while(currentInput !== "Finish"){
        currentInput = input[index++];
        theme = currentInput;
        themeCounter++;

        for(i = 1; i <= judges;  i++){
        let grade = Number(input[index++]);
        gradeTotal += grade;
        }

        gradeTotal = gradeTotal / judges;
        console.log(`${theme} - ${gradeTotal.toFixed(2)}.`);
        gradeTotalSum += gradeTotal;
        gradeTotal = 0;
        currentInput = input[index];

    }

console.log(`Student's final assessment is ${(gradeTotalSum / themeCounter).toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])




