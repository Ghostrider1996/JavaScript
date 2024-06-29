function cinemaTicket (input) {

    let weekDay = input[0];
    let ticketPrice = 0;


    switch (weekDay) {
        case "Monday":
        case "Tuesday":
            ticketPrice = 12
            break;
        
        case "Wednesday":
        case "Thursday":
            ticketPrice = 14
            break;

        case "Friday":
            ticketPrice = 12
            break;

        case "Saturday":
        case "Sunday":
            ticketPrice = 16
            break;

        default:
            console.log("Error");
    }
    console.log(ticketPrice);
}
cinemaTicket(["Monday"])
cinemaTicket(["Friday"])
cinemaTicket(["Sunday"])