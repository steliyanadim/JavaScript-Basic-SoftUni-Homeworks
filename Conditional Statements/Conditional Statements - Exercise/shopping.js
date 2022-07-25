function shopping (input){

    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let RAM = Number(input[3]);

    let videoCardsSum = videoCards * 250;
    let processorsSum = (videoCardsSum * 0.35) * processors;
    let RAMSum = (videoCardsSum * 0.10) * RAM;

    let totalSum = videoCardsSum + processorsSum + RAMSum;

    if (videoCards > processors){
        totalSum = totalSum * 0.85;
    }

    if (budget >= totalSum){
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    }
}
shopping(["920.45",
"3",
"1",
"1"])
