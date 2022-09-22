function footballTournament(input) {
    index = 0;
    let teamName = input[index++];
    let meets = Number(input[index++])
    let pointCounter = 0;
    let WCounter = 0;
    let DCounter = 0;
    let LCounter = 0;

    for (i = 1; i <= meets; i++) {
        if(meets === 0){
            break;
        }
        let currentResult = input[index++];

        switch (currentResult) {
            case "W": pointCounter = pointCounter + 3; WCounter++; break;
            case "D": pointCounter = pointCounter + 1; DCounter++; break;
            case "L": LCounter++; break;

        }
    }
    if(meets !== 0){
    console.log(`${teamName} has won ${pointCounter} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${WCounter}`);
    console.log(`## D: ${DCounter}`);
    console.log(`## L: ${LCounter}`);
    console.log(`Win rate: ${(100 / meets * WCounter).toFixed(2)}%`);
    }else{
        console.log(`${teamName} hasn't played any games during this season.`);
    }
}
//footballTournament(["chelse", "0"])
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W",])
