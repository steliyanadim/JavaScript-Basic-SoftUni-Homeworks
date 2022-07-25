function godzillaKong (input) {
let budget = Number(input[0]);
let actors = Number(input[1]);
let actorsCustumsPrice = Number(input[2]);

let decorPrice = budget * 0.10;
let custumsPrice = actors * actorsCustumsPrice;


if (actors > 150) {
    custumsPrice = custumsPrice * 0.90;
}

let totalCostForMovie = custumsPrice + decorPrice

if (budget >= totalCostForMovie){
    console.log('Action!');
    console.log(`Wingard starts filming with ${(budget - totalCostForMovie).toFixed(2)} leva left.`);
} else {
    console.log(`Not enough money!`)
    console.log(`Wingard needs ${(totalCostForMovie - budget).toFixed(2)} leva more.`)
}

}
godzillaKong(["15.62",
"186",
"57.99"])

