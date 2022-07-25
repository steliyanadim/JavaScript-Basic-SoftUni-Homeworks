function lunchBreak (input){
    let seriesName = (input[0]);
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration * (1 / 8); 
    let restTime = breakDuration * (1 / 4);
    let freeTime = breakDuration - lunchTime - restTime;

    if (freeTime >= episodeDuration){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(freeTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeDuration - freeTime)} more minutes.`);
    }
}
lunchBreak(["Teen Wolf",
"48",
"60"])

