function fishTank (input){

    let lenght = Number(input[0])
    let width = Number(input[1])
    let height = Number(input[2])
    let percent = Number(input[3])

    let volume = lenght * width * height;
    let volumeInLitres = volume / 1000;
    let neededLitres = volumeInLitres * (1 - (percent / 100))


    //нужни литри: 299.625 * (1 - 0.17) = 248.68875 литра

    console.log(neededLitres)


}
fishTank(["85","75","47","17"]
)
