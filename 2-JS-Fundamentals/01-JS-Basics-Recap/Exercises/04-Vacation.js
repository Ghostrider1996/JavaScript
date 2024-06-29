function exercise4(count, groupType, day) {
  let totalPrice = 0;
  let price = 0;

  switch (groupType) {
    case "Students":
      if (day === "Friday") {
        price = 8.45;
      } else if (day === "Saturday") {
        price = 9.8;
      } else if (day === "Sunday") {
        price = 10.46;
      }
      totalPrice = count * price;

      if (count >= 30) {
        totalPrice *= 0.85;
      }
      break;
    case "Business":
      if (day === "Friday") {
        price = 10.9;
      } else if (day === "Saturday") {
        price = 15.6;
      } else if (day === "Sunday") {
        price = 16;
      }
      totalPrice = count * price;

      if (count >= 100) {
        totalPrice -= price * 10;
      }

      break;
    case "Regular":
      if (day === "Friday") {
        price = 15;
      } else if (day === "Saturday") {
        price = 20;
      } else if (day === "Sunday") {
        price = 22.5;
      }

      totalPrice = count * price;

      if (count >= 10 && count <= 20) {
        totalPrice *= 0.95;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
exercise4(30, "Students", "Sunday");
exercise4(40, "Regular", "Saturday");
