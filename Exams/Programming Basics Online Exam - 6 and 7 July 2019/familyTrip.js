function familyTrip(input){
let budget = Number(input[0]);
let nigths = Number(input[1]);
let nightPrice = Number(input[2]);
let percentExtraExpenses = Number(input[3]);

if(nigths > 7){
    nightPrice = nightPrice * 0.95
}

let totalNightPrice = nigths * nightPrice;
percentExtraExpenses = (percentExtraExpenses * budget) / 100;
let totalNeededMoney = percentExtraExpenses + totalNightPrice;

if(budget >= totalNeededMoney){
    console.log(`Ivanovi will be left with ${(budget - totalNeededMoney).toFixed(2)} leva after vacation.`)
}else{
    console.log(`${(totalNeededMoney - budget).toFixed(2)} leva needed.`);
}

}
familyTrip(["500", "7", "66", "15"])


800.50
8
100
2