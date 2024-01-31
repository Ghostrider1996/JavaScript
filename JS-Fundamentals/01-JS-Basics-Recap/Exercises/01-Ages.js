function exercise1(age) {
  let status = "";

  if (age >= 0 && age <= 2) {
    status = "baby";
  } else if (age >= 3 && age <= 13) {
    status = "child";
  } else if (age >= 14 && age <= 19) {
    status = "teenager";
  } else if (age >= 20 && age <= 65) {
    status = "adult";
  } else if (age >= 66) {
    status = "elder";
  } else {
    status = "out of bounds";
  }

  console.log(status);
}
exercise1(20);
exercise1(1);
exercise1(100);
exercise1(-1);
