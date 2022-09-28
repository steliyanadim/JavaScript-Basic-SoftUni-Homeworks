function tennisEquipment(input){
let tennisRacketPrice = Number(input[0]);
let tennisRacketCount = Number(input[1]);
let shoesCount = Number(input[2]);

let tennisRacketPriceTotal = tennisRacketPrice * tennisRacketCount;
let shoesPrice = tennisRacketPrice / 6;
let shoesPriceTotal = shoesPrice * shoesCount;
let otherEquipmentPrice = (shoesPriceTotal + tennisRacketPriceTotal) * 0.20;
let totalSum = tennisRacketPriceTotal + shoesPriceTotal + otherEquipmentPrice;
let totalSumForSponsors = (totalSum * 7) / 8;
let totalSumForPlayer = totalSum / 8;


console.log(`Price to be paid by Djokovic ${Math.floor(totalSumForPlayer)}`)
console.log(`Price to be paid by sponsors ${Math.ceil(totalSumForSponsors)}`);

}
tennisEquipment(["850", "4", "2"])
