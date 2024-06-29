function exercise5(arr) {
  for (const num of arr) {
    let isPalindrome = checkIfPalindrome(num);
    console.log(isPalindrome);
  }

  function checkIfPalindrome(number) {
    let numToStr = number.toString()
    let currNum = numToStr.split("").reverse().join("")

    if (currNum === numToStr) {
      return true;
    } else {
      return false;
    }
  }
}
exercise5([123, 323, 421, 121]);
