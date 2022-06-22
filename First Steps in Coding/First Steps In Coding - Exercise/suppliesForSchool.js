function suppliesForSchool (input){

    let pens = (input[0])
    let markers = (input[1])
    let detergent = (input[2])
    let discount = (input[3])

    let priceForPens = pens * 5.8;
    let priceForMarkers = markers * 7.2;
    let priceForDetergent = detergent * 1.2;

    let totalPrice = priceForPens + priceForMarkers + priceForDetergent;
    let priceWithDiscount = totalPrice - (totalPrice * (discount / 100))

    console.log(priceWithDiscount)
}



suppliesForSchool(["2","3","4","25"])
