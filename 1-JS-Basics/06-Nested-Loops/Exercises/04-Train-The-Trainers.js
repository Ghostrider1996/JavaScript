function exercise4(input) {
  let councilCount = Number(input[0]);
  let gradeSum = 0;
  let totalGrade = 0;
  let totalTask = 0;
  let index = 1;
  let currTask = "";
  let taskCount = 0;

  while (input[index] !== "Finish") {
    currTask = input[index];
    index++;

    for (let i = 0; i < councilCount; i++) {
      let grade = Number(input[index]);
      taskCount++;
      gradeSum += grade;
      index++;
    }

    if (taskCount > 0) {
      let averageGrade = gradeSum / taskCount;
      totalTask += taskCount;
      console.log(`${currTask} - ${averageGrade.toFixed(2)}.`);
      totalGrade += gradeSum;
      taskCount = 0;
      gradeSum = 0;
    }
  }

  console.log(`Student's final assessment is ${(totalGrade / totalTask).toFixed(2)}.`)
}
exercise4([
  "2",
  "While-Loop",
  "6.00",
  "5.50",
  "For-Loop",
  "5.84",
  "5.66",
  "Finish",
]);
