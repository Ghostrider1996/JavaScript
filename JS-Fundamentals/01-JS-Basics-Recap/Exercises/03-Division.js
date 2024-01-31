function exercise3(num) {
  if (num % 10 === 0) {
    console.log("The number is divisible by 10");
  } else if (num % 7 === 0) {
    console.log("The number is divisible by 7");
  } else if (num % 6 === 0) {
    console.log("The number is divisible by 6");
  } else if (num % 3 === 0) {
    console.log("The number is divisible by 3");
  } else if (num % 2 === 0) {
    console.log("The number is divisible by 2");
  } else {
    console.log("Not divisible");
  }
}
exercise3(30)
exercise3(15)
exercise3(12)
exercise3(1643)
