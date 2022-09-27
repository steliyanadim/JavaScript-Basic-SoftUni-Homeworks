function fitnessCenter(input){
    index = 0;
    let visitors = Number(input[index++])
    let currentInput = input[index]

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let shakeCounter = 0;
    let barCounter = 0;

    let workouts = 0;
    let protein = 0;

for(i = 1; i <= visitors; i++){
    currentInput = input[index++]
    switch(currentInput){
        case "Back": backCounter++; workouts++; break;
        case "Chest": chestCounter++; workouts++;  break;
        case "Legs": legsCounter++; workouts++;  break;
        case "Abs": absCounter++; workouts++;  break;
        case "Protein shake": shakeCounter++; protein++; break;
        case "Protein bar": barCounter++; protein++; break;
    }
}
console.log(`${backCounter} - back`);
console.log(`${chestCounter} - chest`);
console.log(`${legsCounter} - legs`);
console.log(`${absCounter} - abs`);
console.log(`${shakeCounter} - protein shake`);
console.log(`${barCounter} - protein bar`);
console.log(`${(((visitors - protein) / visitors) * 100).toFixed(2)}% - work out`);
console.log(`${(((visitors - workouts) / visitors) * 100).toFixed(2)}% - protein`);

}
fitnessCenter(['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein', 'shake', 'Protein', 'bar', 
'Protein', 'shake', 'Protein', 'bar', 'Legs', 'Abs'])



