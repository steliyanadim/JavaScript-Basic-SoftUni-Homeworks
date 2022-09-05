function cleverLily(input){

let age = Number(input[0]);
let washingMashinePrice = Number(input[1]);
let toyPrice = Number(input[2]);

let toysConter = 0;
let savedMoney = 0;
let stolenMoney = 0;
let addMoney = 10;

for(let currentAge = 1 ; currentAge <= age; currentAge++){
 
    if (currentAge % 2 === 0){
        savedMoney = savedMoney + addMoney;
        addMoney = addMoney + 10;
        stolenMoney++;
    }else{
        toysConter++;
    }
}
    let totalToysMoney = toysConter * toyPrice
    let totalSavedSum = savedMoney - stolenMoney + totalToysMoney


    if(totalSavedSum >= washingMashinePrice){
        console.log(`Yes! ${(totalSavedSum - washingMashinePrice).toFixed(2)}`);
    }else{
        console.log(`No! ${(washingMashinePrice - totalSavedSum).toFixed(2)}`);
    }
}
cleverLily(["21",
"1570.98",
"3"])

