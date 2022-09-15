function sumOfTwoNumbers (input){
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinationCounter = 0;
    let combinationIsFound = false;

    for(i = startNum; i <= endNum; i++){
        for(j = startNum; j <= endNum; j++){
            combinationCounter++;
            if(i + j === magicNum){
                console.log(`Combination N:${combinationCounter} (${i} + ${j} = ${magicNum})`);
                combinationIsFound = true;
                break;
            }
        }
    if(combinationIsFound === true){
        break;
    }
    }

    if(combinationIsFound === false){
        console.log(`${combinationCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNumbers(["23",
"24",
"20"])

