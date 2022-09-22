function PCGameShop(input) {
    let index = 0;
    let soldGames = Number(input[index++])
    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let otherGamesCounter = 0;
    let soldGamesPercent = 0;


    for (i = 1; i <= soldGames; i++) {
        let command = input[index]
        switch (command) {
            case "Hearthstone": hearthstoneCounter++; break;
            case "Fornite": forniteCounter++; break;
            case "Overwatch": overwatchCounter++; break;
            default: otherGamesCounter++; break;
        }
        command = input[index++]
    }
    soldGamesPercent = 100 / soldGames
    console.log(`Hearthstone - ${(hearthstoneCounter * soldGamesPercent).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCounter * soldGamesPercent).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCounter * soldGamesPercent).toFixed(2)}%`);
    console.log(`Others - ${(otherGamesCounter * soldGamesPercent).toFixed(2)}%`);

}
PCGameShop(["3", "Hearthstone", "Forni", "Counter-Strike"])



