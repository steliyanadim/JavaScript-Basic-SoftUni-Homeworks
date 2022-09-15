function combinations(input){
let n = Number(input[0]);
let validCombinationsCount = 0;

for (i = 0; i <= n; i++ ){
    for (j = 0; j <= n; j++ ){
        for (k = 0; k <= n; k++ ){
            if( i + j + k === n){
                validCombinationsCount++
            }
        }
    }
}

console.log(validCombinationsCount);

}
combinations(["20"])
