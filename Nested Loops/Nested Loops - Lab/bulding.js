function bulding(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (i = floors; i >= 1; i--) {
        let buf = "";
        for (j = 0; j < rooms; j++) {
            if (i === floors) {
                buf += `L${i}${j} `;
            } else if (i % 2 === 0) {
                buf += `O${i}${j} `;
            } else if (i % 2 !== 0) {
                buf += `A${i}${j} `;
            }
        }
        console.log(buf)

    }

}
bulding(["6", "4"])