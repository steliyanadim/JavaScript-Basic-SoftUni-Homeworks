function basketballEquipment (input){

    let taxPerYear = Number(input[0])
    
    let shoes = taxPerYear * 0.6;
    let outfit = shoes * 0.8;
    let ball = outfit / 4;
    let accessories = ball / 5;

    let totalPriceForEquipment = taxPerYear + shoes + outfit + ball + accessories

    console.log(totalPriceForEquipment)

}

basketballEquipment (["365"])