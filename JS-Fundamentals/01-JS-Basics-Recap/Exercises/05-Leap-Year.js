function exercise5(year) {
  let leep = false;

  if (year % 4 === 0 && year % 100 !== 0) {
    leep = true;
  } else if (year % 400 === 0) {
    leep = true;
  }

  if (leep) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
exercise5(1984)
exercise5(2003)
exercise5(4)
