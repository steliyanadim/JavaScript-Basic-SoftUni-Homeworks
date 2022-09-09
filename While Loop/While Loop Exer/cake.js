function cake(input) {

    let index = 0;
    let cakeH = Number(input[index]);
    index++
    let cakeW = Number(input[index]);
    index++
    let cakeSlices = cakeH * cakeW;
    let currentInput = 0;
    let currentSlice = 0;


    while (cakeSlices > 0) {
        currentInput = input[index];
        if (currentInput === "STOP") {
            break;
        }
        currentSlice = Number(input[index])
        cakeSlices -= currentSlice;
        index++;
    }
    
    if (cakeSlices > 0) {
        console.log(`${cakeSlices} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${cakeSlices * -1} pieces more.`);
    }

}
cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])


