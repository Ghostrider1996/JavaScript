function timePlus(input) {

    let hour = Number(input[0]);
    let minute = Number(input[1]);
    const additionalMinutes = 15;
    
    minute = minute + additionalMinutes

    if (minute >= 60) {

        minute -= 60
        hour += 1
    }

    if (hour >= 24) {

        hour -= 24
    }

    if (minute < 10) {
        console.log(`${hour}:0${minute}`);
    } else {
        console.log(`${hour}:${minute}`);
    }
}
timePlus(["1", "46"])
timePlus(["0", "01"])
timePlus(["23", "59"])
timePlus(["11", "08"])
timePlus(["12", "49"])