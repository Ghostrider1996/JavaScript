function exersice9(data) {
  const userName = data.shift();
  let guess = data.shift();
  const urerNameLenght = userName.length - 1;
  let password = "";
  let wrongGuesses = 0;

  for (let index = urerNameLenght; index >= 0; index--) {
    let character = userName[index];
    password += character;
  }

  while (guess !== password) {
    if (guess !== password) {
      wrongGuesses += 1;
      if (wrongGuesses >= 4) {
        console.log(`User ${userName} blocked!`);
        break;
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
    guess = data.shift();
  }

  if (guess === password && wrongGuesses < 4) {
    console.log(`User ${userName} logged in.`);
  }
}
exersice9(["Acer", "login", "go", "let me in", "recA"]);
