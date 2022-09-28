function gymnastics(input) {
    let country = input[0]
    let device = input[1]
    let points = 0;

    switch(country){
        case "Bulgaria": 
        switch(device){
            case "ribbon": points = 9.6 + 9.4; break;
            case "hoop": points = 9.55 + 9.75; break;
            case "rope": points = 9.5 + 9.4; break;
        }
        break;
        case "Russia": 
        switch(device){
            case "ribbon": points = 9.1 + 9.4; break;
            case "hoop": points = 9.3 + 9.8; break;
            case "rope": points = 9.6 + 9; break;
        }
        break;
        case "Italy": 
        switch(device){
            case "ribbon": points = 9.2 + 9.5; break;
            case "hoop": points = 9.45 + 9.35; break;
            case "rope": points = 9.7 + 9.15; break;
        }
        break;
    }
let percent = ((20 - points) / 20) * 100;

console.log(`The team of ${country} get ${points.toFixed(3)} on ${device}.`);
console.log(`${percent.toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"])