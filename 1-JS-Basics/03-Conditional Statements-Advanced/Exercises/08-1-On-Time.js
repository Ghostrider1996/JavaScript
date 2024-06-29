function onTime(list) {
    const hour_of_exam = Number(list[0]);
    const minutes_of_exam = Number(list[1]);
    const hour_of_arrival = Number(list[2]);
    const minutes_of_arrival = Number(list[3]);

    const time_for_exam = hour_of_exam * 60 + minutes_of_exam;
    const time_for_arrival = hour_of_arrival * 60 + minutes_of_arrival;
    const diff = Math.abs(time_for_exam - time_for_arrival);
    const hour = Math.floor(diff / 60);
    const minutes = diff % 60;

    if (time_for_exam === time_for_arrival) {
        console.log('On Time');
    } else {
        let on_time = 'after';
        let status = 'Late';

        if (time_for_arrival < time_for_exam) {
            on_time = 'before';

            if (diff <= 30) {
                status = 'On time';
            } else {
                status = 'Early';
            }
        }

        console.log(status);

        if (Math.abs(diff) < 60) {
            console.log(`${minutes} minutes ${on_time} the start`);
        } else {
            console.log(`${hour}:${String(minutes).padStart(2, '0')} hours ${on_time} the start`);
        }
    }
    
}
onTime(["9","30","9","50"])
onTime(["9","00","10","30"])
onTime(["10","00","10","00"])
onTime(["9","00","8","30"])
onTime(["16","00","15","00"])
onTime(["14","00","13","55"])
onTime(["11","30","8","12"])
onTime(["11","30","10","55"])
onTime(["11","30","12","29"])
onTime(['24', '12', '12', '12'])