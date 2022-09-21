function coffeeMachine(input) {
    let drink = input[0];
    let sweetner = input[1];
    let quantity = Number(input[2]);
    let totalPrice = 0;
    let discount = 0;


    switch (sweetner) {
        case "Normal":
            switch (drink) {
                case "Espresso": totalPrice = 1 * quantity; break;
                case "Cappuccino": totalPrice = 1.2 * quantity; break;
                case "Tea": totalPrice = 0.6 * quantity; break;
            }
            break;
        case "Extra":
            switch (drink) {
                case "Espresso": totalPrice = 1.2 * quantity; break;
                case "Cappuccino": totalPrice = 1.6 * quantity; break;
                case "Tea": totalPrice = 0.7 * quantity; break;
            }
            break;
        case "Without":
            switch (drink) {
                case "Espresso": totalPrice = 0.9 * quantity;
                    if (quantity >= 5) {
                        discount = (25 * totalPrice) / 100;
                        totalPrice -= discount
                    }
                    break;
                case "Cappuccino": totalPrice = 1 * quantity; break;
                case "Tea": totalPrice = 0.5 * quantity; break;
            }
            discount = 0;
            discount = totalPrice * 0.35
            totalPrice -= discount
            break;
    }


    if (totalPrice > 15) {
        discount = 0;
        discount = (20 * totalPrice) / 100;
        totalPrice -= discount;
    }
    console.log(`You bought ${quantity} cups of Espresso for ${totalPrice.toFixed(2)} lv.`);
}
coffeeMachine(["Cappuccino", "Normal", "13"])