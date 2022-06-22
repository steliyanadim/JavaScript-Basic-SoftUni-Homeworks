function yardGreening (input){
    let SQM = (input [0])
    let priceForSQM = 7.61;
    let priceForYard =SQM * priceForSQM;
    let discount = 0.18;
    let discountPrice = discount * priceForYard
    let totalprice = priceForYard - discountPrice
    let result = `The final price is: ${totalprice} lv.`
    let resultDiscount = `The discount is: ${discountPrice} lv.`
    console.log (result)
    console.log(resultDiscount)
}
yardGreening(["550"])