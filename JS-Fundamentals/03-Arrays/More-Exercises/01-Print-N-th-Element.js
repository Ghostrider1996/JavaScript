function moreExercise1(stringArray) {
  let arrayLength = stringArray.length -1;
  let step = Number(stringArray[arrayLength]);
  let collection = [];

  for (let index = 0; index < arrayLength; index += step) {
    let newElement = stringArray[index];
    collection.push(newElement);
  }

  let result = collection.join(" ");
  console.log(result);
}
moreExercise1(['5', '20', '31', '4', '20', '2'])
// moreExercise1(['dsa', 'asd', 'test', 'test', '2'])
// moreExercise1(["1", "2", "3", "4", "5", "6"]);
