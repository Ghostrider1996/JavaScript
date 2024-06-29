function lab1(grade) {
  let gradeToWord = "";

  if (grade < 3.0) {
    gradeToWord = "Fail";
  } else if (grade >= 3.0 && grade < 3.5) {
    gradeToWord = "Poor";
  } else if (grade >= 3.5 && grade < 4.5) {
    gradeToWord = "Good";
  } else if (grade >= 4.5 && grade < 5.5) {
    gradeToWord = "Very good";
  } else if (grade >= 5.5) {
    gradeToWord = "Excellent";
  }
  if (gradeToWord !== "Fail") {
    console.log(`${gradeToWord} (${grade.toFixed(2)})`);
  } else {
    console.log(`${gradeToWord} (2)`);
  }
 
}
lab1(3.33);
lab1(4.5);
lab1(2.99);
