function examPreparation(input) {

    let acceptedFailCount = Number(input[0]);
    let taskName = input[1];
    let grade = Number(input[2]);
    let totalScore = 0;
    let index = 3;
    let failGrade = 0;
    let taskSolved = 0;
    let lastProblem = ""



    while (taskName !== "Enough") {

        if (grade <= 4) {
            failGrade++;
        }

        if (failGrade >= acceptedFailCount) {
            console.log(`You need a break, ${failGrade} poor grades.`);
            break;
        }

        if (taskName !== "Enough") {
            lastProblem = taskName
        }
        totalScore += grade
        taskSolved++
        taskName = input[index]
        index++
        grade = Number(input[index])
        index++



    }
    let averageGrade = totalScore / taskSolved
    if (failGrade < acceptedFailCount) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${taskSolved}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"])
examPreparation(["2","Income","3","Game Info","6","Best Player","4"])    

