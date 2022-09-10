function cinemaTickets(input) {
    let index = 0;
    let currentInput = input[index];

    let standartTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let ticketsCounter = 0;
    let ticketsCounterTotal = 0;


    while (currentInput !== "Finish") {
        let movie = currentInput;
        index++
        let spaces = Number(input[index++]);


        let ticketType = input[index];
        ticketsCounter = 0;

        while (ticketType !== "End") {
            ticketsCounter++;

            switch (ticketType) {
                case "standard": standartTickets++; break;
                case "student":studentTickets++; break;
                case "kid": kidTickets++; break;
            }
            if (ticketsCounter >= spaces) {
                break;
            }
            ticketType = input[++index];
        }

        ticketsCounterTotal +=ticketsCounter
        console.log(`${movie} - ${(ticketsCounter / spaces * 100).toFixed(2)}% full.`);
        currentInput = input[++index]
    }

    console.log(`Total tickets: ${ticketsCounterTotal}`);
    console.log(`${(studentTickets / ticketsCounterTotal * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTickets / ticketsCounterTotal * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / ticketsCounterTotal * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);