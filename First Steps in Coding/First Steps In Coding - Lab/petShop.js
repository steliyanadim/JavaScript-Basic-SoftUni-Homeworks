function petShop (input){
    let dogfoodprice = 2.5;
    let catfoodprice = 4;
    let dogFoodQuanquantity =(input[0])
    let catFoodQuanquantity =(input[1])
    let petfoodprice = (dogfoodprice * dogFoodQuanquantity) + (catfoodprice * catFoodQuanquantity) + "lv."
    console.log(petfoodprice)
}
petShop(["5","4"])