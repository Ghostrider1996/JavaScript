function moreExercise3(numArr) {
  let rotations = numArr.pop();

  for (let index = 0; index < rotations; index++) {
    let rotationElement = numArr.pop();
    numArr.unshift(rotationElement); 
  }

  console.log(numArr.join(" "));
}
moreExercise3(["1", "2", "3", "4", "2"]);
moreExercise3(["Banana", "Orange", "Coconut", "Apple", "15"]);
