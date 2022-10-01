function careOfPuppy(input){
let index = 0;
let dogFood = Number(input[index++]);
let commad = input[index]

dogFood = dogFood * 1000;
let currentDayFood = 0;
let neededFood = 0;

while(commad !== "Adopted"){
currentDayFood = Number(input[index++])
neededFood += currentDayFood
commad = input[index]
}

if(neededFood <= dogFood){
    console.log(`Food is enough! Leftovers: ${dogFood - neededFood} grams.`);
}else{
    console.log(`Food is not enough. You need ${neededFood - dogFood} grams more.`);
}
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"])
