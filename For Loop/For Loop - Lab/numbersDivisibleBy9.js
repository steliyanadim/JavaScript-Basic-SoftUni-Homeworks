function numbersDivisibleBy9(input){
let startnum = Number(input[0]);
let endnum = Number(input[1]);
let sum = 0;
let buff = "";

for(let i = startnum; i <= endnum; i++ ){
    if(i % 9 === 0){
        sum += i;
        buff += `${i}\n`
    }
}
console.log(`The sum: ${sum}`)
console.log(buff)
}
numbersDivisibleBy9(["100", "200"])