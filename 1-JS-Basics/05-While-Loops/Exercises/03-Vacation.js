function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let totalDays = 0;
    let consecutiveSpendDays = 0;
    let index = 2

    while (moneyAvailable < moneyNeeded) {

        let operation = input[index]
        index++
        let moneyAmount = Number(input[index])


        if (operation === "spend") {
            consecutiveSpendDays++
            totalDays++
            moneyAvailable -= moneyAmount
            if (consecutiveSpendDays === 5) {
                console.log("You can't save the money.");
                console.log(totalDays);
                break;
            }
        } else if (operation === "save") {
            totalDays++
            consecutiveSpendDays = 0
            moneyAvailable += moneyAmount
        }

        if (moneyAvailable < 0) {
            moneyAvailable = 0;
        }

        if (moneyAvailable >= moneyNeeded) {
            console.log(`You saved the money for ${totalDays} days.`)
            break;
        }

        index++

    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"])
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"])


