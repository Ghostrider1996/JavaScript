function lab6(dayType, age) {
  let price = 0;
  let error = false

  switch (dayType) {
    case "Weekend":
      if (age >= 0 && age <= 18) {
        price = 15;
      } else if (age > 18 && age <= 64) {
        price = 20;
      } else if (age > 64 && age <= 122) {
        price = 15;
      } else {
        error = true
      }
      break;
    case "Weekday":
      if (age >= 0 && age <= 18) {
        price = 12;
      } else if (age > 18 && age <= 64) {
        price = 18;
      } else if (age > 64 && age <= 122) {
        price = 12;
      } else {
        error = true
      }
      break;
    case "Holiday":
      if (age >= 0 && age <= 18) {
        price = 5;
      } else if (age > 18 && age <= 64) {
        price = 12;
      } else if (age > 64 && age <= 122) {
        price = 10;
      } else {
        error = true
      }
      break;
    default:
      error = true
      break;
  }

  if (!error) {
    console.log(`${price}$`);
  } else {
    console.log('Error!');
  }
}
lab6("Weekday", 42);
lab6("Holiday", -12);
lab6("Holiday", 15);
