function moreExercise3(year, month, day) {
  // Create a new Date object with the given year, month, and day
  let currentDate = new Date(year, month - 1, day);

  // Increment the date by one day
  currentDate.setDate(currentDate.getDate() + 1);

  // Get the components of the new date
  let nextYear = currentDate.getFullYear();
  let nextMonth = currentDate.getMonth() + 1; // Months are zero-based
  let nextDay = currentDate.getDate();

  // Format the result as "YYYY-MM-DD"
  let result = `${nextYear}-${nextMonth}-${nextDay}`;

  console.log(result); // Output: 2016-10-1
}
// getNextDay(2016, 9, 30);
moreExercise3(2016, 9, 30);
// getNextDay(2020, 3, 24)
