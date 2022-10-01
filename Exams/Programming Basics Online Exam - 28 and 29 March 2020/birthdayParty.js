function birthdayParty(input){
    
let rent = Number(input);

let cake = rent * 0.20;
let drinks = cake * 0.55;
let animator = rent / 3;

let neededMoney = rent + cake + drinks + animator;

console.log(neededMoney);

}
birthdayParty(['3720 '])