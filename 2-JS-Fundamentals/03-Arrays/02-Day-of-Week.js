function lab2(num) {
  let weekDays = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  let isTrue = weekDays.hasOwnProperty(num);

  if (isTrue) {
    console.log(weekDays[num]);
  } else {
    console.log("Invalid day!");
  }
}
lab2(3);
lab2(6);
lab2(11);
