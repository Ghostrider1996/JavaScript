function executeStringCommands(input) {
  let string = input.shift();

  for (let command of input) {
    let [action, ...params] = command.split(" ");

    switch (action) {
      case "Change":
        let [char, replacement] = params;
        string = string.split(char).join(replacement);
        console.log(string);
        break;
      case "Includes":
        let substring = params[0];
        if (string.includes(substring)) {
          console.log("True");
        } else {
          console.log("False");
        }

        break;
      case "End":
        let endSubstring = params[0];
        if (string.endsWith(endSubstring)) {
          console.log("True");
        } else {
          console.log("False");
        }

        break;
      case "Uppercase":
        string = string.toUpperCase();
        console.log(string);
        break;
      case "FindIndex":
        let charToFind = params[0];
        console.log(string.indexOf(charToFind));
        break;
      case "Cut":
        let startIndex = Number(params[0]);
        let count = Number(params[1]);
        let cutString = string.substring(startIndex, startIndex + count);
        console.log(cutString);
        break;
      case "Done":
        return;
      default:
        console.log("Invalid command.");
        break;
    }
  }
}
executeStringCommands([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done",
]);
executeStringCommands([
  "*S0ftUni is the B3St Plac3**",
  "Change 2 o",
  "Includes best",
  "End is",
  "Uppercase",
  "FindIndex P",
  "Cut 3 7",
  "Done",
]);
