function specialNumbers(input) {

    let num = Number(input[0]);
    let buff = "";

    for (i = 1; i <= 9; i++) {

        for (j = 1; j <= 9; j++) {
            for (k = 1; k <= 9; k++) {
                for (l = 1; l <= 9; l++) {
                    if (num % i === 0 &&
                        num % j === 0 &&
                        num % k === 0 &&
                        num % l === 0) {
                        buff += `${i}${j}${k}${l} `
                    }

                }
            }

        }

    }
    console.log(buff)
}
specialNumbers(["3"])