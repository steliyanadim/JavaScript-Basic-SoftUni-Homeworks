function darts(input){
let  index = 0
let playerName = input[index++]
let command = input[index]
let startPoints = 301
let point = 0;
let win = 0;
let lose = 0;

while(command !== "Retire"){
    command = input[index++]
    point = Number(input[index++])

    if(command === "Triple"){
        point = point * 3;
    }else if(command === "Double"){
        point = point * 2;
    }else if(command === "Single"){
        point = point * 1;
    }
    if(point <= startPoints){
        startPoints -= point
        win++
    }else{
        lose++
    }
    if(startPoints === 0){
        break;
    }
    command = input[index]
    point = 0;
}

if(startPoints === 0){
   console.log(`${playerName} won the leg with ${win} shots.`);
}else{
    console.log(`${playerName} retired after ${lose} unsuccessful shots.`);
}

}
darts(["Michael van Gerwen", "Triple", "20", "Triple", "19", , "Double", "10", 
"Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"])


