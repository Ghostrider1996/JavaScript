function walking(input) {

    let totalSteps = 0;
    let goal = 10000

    let command = input[0];
    let index = 1;
    let diff = 0;




    while (command !== 'Going home') {
        let steps = Number(command);
        totalSteps += steps

        if (totalSteps >= goal) {
            diff = Math.abs(totalSteps - goal)
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;

    }
    if (command === "Going home") {
        let stepsGoingHome = Number(input[index]);
        totalSteps += stepsGoingHome
        if (totalSteps >= goal) {
            diff = Math.abs(totalSteps - goal)
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
        } else if (totalSteps < goal) {
            diff = Math.abs(totalSteps - goal)
            console.log(`${diff} more steps to reach goal.`);
        }
    }

}
// walking(["1000","1500","2000","6500"])
// walking(["1500", "300", "2500", "3000", "Going home", "200"])
// walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])
// walking(["125","250","4000","30","2678","4682"])
