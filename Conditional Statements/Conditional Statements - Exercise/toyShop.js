function toyShop (input){

    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesSum = puzzles * 2.60;
    let dollsSum = dolls * 3;
    let bearsSum = bears * 4.10;
    let minionsSum = minions * 8.20;
    let trucksSum = trucks * 2;

    let toysTotalSum = puzzlesSum + dollsSum + bearsSum + minionsSum + trucksSum;
    let toysCount = puzzles + dolls + bears + minions + trucks;

    if (toysCount >= 50) {
        toysTotalSum = toysTotalSum * 0.75;
    }

    toysTotalSum = toysTotalSum * 0.90;

    if (toysTotalSum >= tripPrice) {
        console.log(`Yes! ${(toysTotalSum - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log (`Not enough money! ${(tripPrice - toysTotalSum).toFixed(2)} lv needed.`)
    }

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

