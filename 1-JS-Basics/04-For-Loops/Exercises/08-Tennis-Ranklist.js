function tenisRanklist(input) {

    let turnamentCount = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finalPoints = 0;
    let win = 0;


    for (i = 2; i <= input.length; i++ ) {

        let status = input[i]

        if (status == "W") {
            win += 1
            finalPoints += 2000
        } else if (status == "F") {
            finalPoints += 1200
        } else if (status == "SF") {
            finalPoints += 720
        }

        

    }

    let averagePoints = finalPoints / turnamentCount
        let winPercent = win / turnamentCount * 100

        console.log(`Final points: ${finalPoints + startingPoints}`);
        console.log(`Average points: ${Math.floor(averagePoints)}`);
        console.log(`${winPercent.toFixed(2)}%`);
}
tenisRanklist(["5","1400","F","SF","W","W","SF"])
tenisRanklist(["4","750","SF","W","SF","W"])
tenisRanklist(["7","1200","SF","F","W","F","W","SF","W"])

