function onTime(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let examTimeInMinutes = examHour * 60 + examMinute
    let arriveTimeInMinutes = arriveHour * 60 + arriveMinute
    let arriveStatus = ""

    let difference = examTimeInMinutes - arriveTimeInMinutes

    let hour = Math.trunc(Math.abs(difference / 60)) 
    let minute = Math.abs(difference % 60)
    console.log(hour);

    if (difference >= 0 && difference <= 30) {
        arriveStatus = "On time"

        if (difference === 0) {
            console.log(arriveStatus);

        } else {
            console.log(arriveStatus);
            console.log(`${minute} minutes before the start`);
        }
    } else if (difference > 30) {
        arriveStatus = "Early"

        if (difference < 60){
            console.log(arriveStatus);
            console.log(`${minute} minutes before the start`);

        } else if (difference < 70) {
            console.log(arriveStatus);
            console.log(`${hour}:0${minute} hours before the start`);

        } else {
            console.log(arriveStatus);
            console.log(`${hour}:${minute} hours before the start`);
        }
    } else if (difference < 0) {
        arriveStatus = "Late"

        if (difference > -60) {
            console.log(arriveStatus);
            console.log(`${minute} minutes after the start`);

        } else if (difference > -70) {
            console.log(arriveStatus);
            console.log(`${hour}:0${minute} hours after the start`);

        } else {
            console.log(arriveStatus);
            console.log(`${hour}:${minute} hours after the start`);
        }
    }
}
// onTime(["9","30","9","50"])
// onTime(["9","00","10","30"])
// onTime(["10","00","10","00"])
// onTime(["9","00","8","30"])
// onTime(["16","00","15","00"])
// onTime(["14","00","13","55"])
// onTime(["11","30","8","12"])
// onTime(["11","30","10","55"])
// onTime(["11","30","12","29"])
// onTime(['24', '12', '23', '12'])


