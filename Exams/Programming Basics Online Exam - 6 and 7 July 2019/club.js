function club(input) {
    let index = 0;
    let profitDesire = Number(input[index++])
    let command = input[index++];
    let cocktailPriceTotal = 0;
    let cocktailPrice = 0;
    let totalSum = 0;

    while (command !== "Party!") {
        let cocktail = command;
        cocktailPrice = cocktail.length;
        let cocktailQuantity = Number(input[index++])
        cocktailPriceTotal = cocktailPrice * cocktailQuantity;
        if (cocktailPriceTotal % 2 !== 0) {
            cocktailPriceTotal = cocktailPriceTotal * 0.75;
        }
        totalSum += cocktailPriceTotal;
        
        if(totalSum >= profitDesire){
            break;
        }
        command = input[index++]
    }

    if (totalSum < profitDesire) {
        console.log(`We need ${(profitDesire - totalSum).toFixed(2)} leva more.`);
        console.log(`Club income - ${(totalSum).toFixed(2)} leva.`);
    } else {
        console.log(`Target acquired.`);
        console.log(`Club income - ${(totalSum).toFixed(2)} leva.`);
    }
}
//club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"])
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"])
