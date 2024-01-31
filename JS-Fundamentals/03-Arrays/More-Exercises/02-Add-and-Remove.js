function moreExercise2(commands) {
  let numArray = [];
  let arrayLength = commands.length;

  for (let i = 0; i < arrayLength; i++) {
    let command = commands[i];

    if (command === "add") {
      numArray.push(i + 1);
    } else if (command === "remove") {
      numArray.pop(numArray.length - 1);
    }
  }

  let result = numArray.join(" ");

  if (numArray.length < 1) {
    console.log("Empty");
  } else {
    console.log(result);
  }
}
moreExercise2(["add", "add", "add", "add"]);
moreExercise2(["add", "add", "remove", "add", "add"]);
moreExercise2(["remove", "remove", "remove"]);
