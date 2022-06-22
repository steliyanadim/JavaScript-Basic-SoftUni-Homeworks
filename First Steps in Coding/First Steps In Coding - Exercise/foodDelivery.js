function foodDelivery (input){

let chickenMenu = (input[0])
let fishMenu = (input[1])
let vegetarianMenu = (input[2])

let priceForChickenMenu = chickenMenu * 10.35;
let priceForFishMenu = fishMenu * 12.4;
let priceForVegetarianMenu = vegetarianMenu * 8.15;
let totalPriceForMenu = priceForChickenMenu + priceForFishMenu + priceForVegetarianMenu
let priceForDessert = totalPriceForMenu * 0.2;
let totalPriceForDelivery = totalPriceForMenu + priceForDessert + 2.5;


console.log(totalPriceForDelivery)
}

foodDelivery (["2","4","3"])
