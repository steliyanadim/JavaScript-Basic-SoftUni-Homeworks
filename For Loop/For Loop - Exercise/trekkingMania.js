function trekkingMania(input) {
    let groupCount = Number(input[0]);
    let totalPeople = 0;
    let currentGrup = 0;
    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    p5 = 0;

    for (let i = 1; i <= groupCount; i++) {
    currentGrup = Number(input[i])
    totalPeople = totalPeople + currentGrup

        if(currentGrup <= 5){
            p1 = p1 + currentGrup;
        } else if(currentGrup <= 12){
            p2 = p2 + currentGrup;
        } else if(currentGrup <= 25){
            p3 = p3 + currentGrup;
        } else if(currentGrup <= 40){
            p4 = p4 + currentGrup;
        }else{
            p5 = p5 + currentGrup
        }
    }

        console.log(`${(p1 / totalPeople * 100).toFixed(2)}%`)
        console.log(`${(p2 / totalPeople * 100).toFixed(2)}%`)
        console.log(`${(p3 / totalPeople * 100).toFixed(2)}%`)
        console.log(`${(p4 / totalPeople * 100).toFixed(2)}%`)
        console.log(`${(p5 / totalPeople * 100).toFixed(2)}%`)

}
    trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
    


  