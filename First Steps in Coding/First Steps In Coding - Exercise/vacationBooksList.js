function vacationBooksList(input){

let pages = Number(input[0]);
let pagesPerHour = Number(input[1]);
let days = Number(input[2]);

let timeForOneBook = pages / pagesPerHour;
let housrPerDay = timeForOneBook / days;

console.log(housrPerDay)
}

vacationBooksList (["212","20","2"])