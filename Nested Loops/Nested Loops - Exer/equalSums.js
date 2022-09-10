function equalSums(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let res = "";


    for (i = startNum; i <= endNum; i++) {
        let currentInput = i + "";
        let oddSum = 0;
        let evenSum = 0;
        for (j = 0; j < currentInput.length; j++) {
            let currentNum = Number(currentInput.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentNum;
            } else if (j % 2 !== 0) {
                oddSum += currentNum
            }
        }
        if (evenSum === oddSum) {
            res += `${i} `;
        }
    }

    console.log(res);
}
equalSums(["100000", "100050"])
