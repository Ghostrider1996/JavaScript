function graduation(input) {

    let studentName = input[0];

    let excludCount = 0;
    let grades = 1;
    let sumGrade = 0;

    let currentGrade = Number(input[grades])


    while (grades <= 12) {

        if (currentGrade < 4) {
            excludCount++;
        }

        if (excludCount > 1) {
            console.log(`${studentName} has been excluded at ${grades - 1} grade`);
            break;
        }

        sumGrade += currentGrade
        grades++
        currentGrade = Number(input[grades])
    }
    let averageGrade = sumGrade / 12
    if (excludCount < 2)
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);

}
graduation(["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"])
graduation(["Mimi","5","6","5","6","5","6","6","2","3"])

