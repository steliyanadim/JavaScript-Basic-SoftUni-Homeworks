function skeleton(input) {
    let minControl = Number(input[0]);
    let secControl = Number(input[1]);
    let lenghtRout = Number(input[2]);
    let secsFor100Metres = Number(input[3]);

    let slowingCount = lenghtRout / 120;
    secControl = (minControl * 60) + secControl;
    let totalsecsSlow = slowingCount * 2.5;

    let totaltime = ((lenghtRout / 100) * secsFor100Metres) - totalsecsSlow;

    if(totaltime <= secControl){
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${totaltime.toFixed(3)}.`);
    }else{
        console.log(`No, Marin failed! He was ${(totaltime - secControl).toFixed(3)} second slower.`);
    }

}
skeleton(["1", "20", "1546", "12"])

