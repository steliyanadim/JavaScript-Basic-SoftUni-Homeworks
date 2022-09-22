function poolDay(input){

let people = Number(input[0]);
let entryCharge = Number(input[1]);
let sunBedPrice = Number(input[2]);
let umbrellaPrice = Number(input[3]);

let totalEntryCharge = people * entryCharge;
let totalSunBedPrice = Math.ceil(0.75 * people)
totalSunBedPrice = totalSunBedPrice * sunBedPrice;
let totalUmbrellaPrice = (Math.ceil(people / 2)) * umbrellaPrice;

let totalSum = totalEntryCharge + totalSunBedPrice + totalUmbrellaPrice;

console.log(`${totalSum.toFixed(2)} lv.`)
}
poolDay(["21", "5.5", "4.4", "6.2"])


