function workingHours(input) {

    let dayHour = Number(input[0]);
    let weekDay = input[1];

    switch (weekDay) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (dayHour >= 10 && dayHour <= 18) {
                console.log("open");
            } else {
                console.log("closed");
            }
            break;

        case "Sunday":
            console.log("closed");
            break;
    }
}
workingHours(["11", "Monday"])
workingHours(["19", "Friday"])
workingHours(["11", "Sunday"])