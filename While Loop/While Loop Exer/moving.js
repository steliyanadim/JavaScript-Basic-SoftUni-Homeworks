function moving(input) {

    index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let cubicMetresSpace = width * length * height;
    let freeSpace = cubicMetresSpace;
    let currentInput = 0;
    let occupySpace = 0;



    while (freeSpace >= 0) {
        currentInput = input[index]
        if (currentInput === "Done") {
            break;
        }
        currentInput = Number(input[index])
        occupySpace += currentInput;

        freeSpace -= currentInput;
        index++;
    }

    if (occupySpace > cubicMetresSpace) {
        console.log(`No more free space! You need ${occupySpace - cubicMetresSpace} Cubic meters more.`);
    } else {
        console.log(`${cubicMetresSpace - occupySpace} Cubic meters left.`);
    }

}
moving(["10",
    "1",
    "2",
    "4",
    "5",
    "Done"])

