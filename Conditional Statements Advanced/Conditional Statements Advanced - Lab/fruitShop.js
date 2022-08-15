function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let qauntity = Number(input[2]);
    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": price = 2.50 * qauntity; break; break;
                case "apple": price = 1.20 * qauntity; break;
                case "orange": price = 0.85 * qauntity; break;
                case "grapefruit": price = 1.45 * qauntity; break;
                case "kiwi": price = 2.70 * qauntity; break;
                case "pineapple": price = 5.50 * qauntity; break;
                case "grapes": price = 3.85 * qauntity; break;
            }
    }
    switch (day) {
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": price = 2.70 * qauntity; break;
                case "apple": price = 1.25 * qauntity; break;
                case "orange": price = 0.90 * qauntity; break;
                case "grapefruit": price = 1.60 * qauntity; break;
                case "kiwi": price = 3.00 * qauntity; break;
                case "pineapple": price = 5.60 * qauntity; break;
                case "grapes": price = 4.20 * qauntity; break;
            }
    }
    if (price === 0) {
        console.log("error")
    } else {
        console.log(price.toFixed(2))
    }

}
fruitShop(["kwi", "Monay", "2"])
