function depositCalculator (input){
    let sum = Number(input[0])
    let months = Number(input[1])
    let percent = Number(input[2])

    sumtotal = sum + months * ((sum * percent / 100) / 12)

    console.log(sumtotal)
}
depositCalculator (["200","3","5.7"])
