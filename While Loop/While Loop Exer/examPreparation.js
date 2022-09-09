function examPreparation(input) {
    let index = 0;
    let badGradelimit = Number(input[index]);
    index++;
    let data = input[index];

    let badGrade = 0;
    let problemsCount = 0;
    let gradeCount = 0;
    let lastData = 0;
    let commadEnought = false;

    while (badGrade < badGradelimit) {
        data = input[index];
        lastData = input[index - 2];
        index++;
        problemsCount++;

        if (data === "Enough") {
            commadEnought = true;
            break;
        }

        let grade = Number(input[index])
        index++;
        gradeCount += grade;


        if (grade <= 4) {
            badGrade++;
        }
    }

    if (commadEnought === true) {
        console.log(`Average score: ${(gradeCount / (problemsCount - 1)).toFixed(2)}`);
        console.log(`Number of problems: ${problemsCount - 1}`);
        console.log(`Last problem: ${lastData}`);

    } else {
        console.log(`You need a break, ${badGrade} poor grades.`);
    }

}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"])

