function worldSwimmingRecord (input){
    let recordInSec = Number(input[0]);
    let distanceInMetres = Number(input[1]);
    let metresPerSec = Number(input[2]);

    let neededTime = metresPerSec * distanceInMetres;
    let delay = Math.floor(distanceInMetres / 15) * 12.5;
    let totalTime = neededTime + delay;

    if (totalTime < recordInSec){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - recordInSec).toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["10464","1500","20"])
