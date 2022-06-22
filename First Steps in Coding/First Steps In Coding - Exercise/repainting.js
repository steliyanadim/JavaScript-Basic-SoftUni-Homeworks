function repainting (input){

let nylon = Number(input[0])
let paint = Number(input[1])
let thinner = Number(input[2])
let hoursWork = Number(input[3])

let nylonPrice = (nylon + 2) * 1.5;
let paintPrice = (paint * 1.1) * 14.5;
let priceThinner = thinner * 5;

let totalPriceForMatarials = nylonPrice + paintPrice + priceThinner + 0.4;
let priceForWork = (totalPriceForMatarials * 0.30) * hoursWork;
let totalPrice = totalPriceForMatarials + priceForWork

console.log(totalPrice)
}

repainting(["10","11","4","8"])
