function tennisRanklist(input) {
    let index = 0
    let tounirsCount = Number(input[index])
    index++
    let startingPoint = Number(input[index])
    let finalPoint = 0
    let winTournirs = 0

    for (let i = 2; i <= input.length; i++) {
        let currentTournir = String(input[i])

        switch (currentTournir) {
            case "W": finalPoint = finalPoint + 2000;
                winTournirs++; break;
            case "F": finalPoint = finalPoint + 1200; break;
            case "SF": finalPoint = finalPoint + 720; break;
        }
    }
    console.log(`Final points: ${finalPoint + startingPoint}`);
    console.log(`Average points: ${Math.trunc(finalPoint / tounirsCount)}`);
    console.log(`${((winTournirs / tounirsCount) * 100).toFixed(2)}%`);
}
tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])


