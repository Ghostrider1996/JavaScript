function carWash(array) {
    let initialValue = 0;
    let commands = array;
  
    while (commands.length > 0) {
      let command = commands.shift();
  
      switch (command) {
        case "soap": {
          initialValue += 10;
        }
        break;
  
        case "water": {
          initialValue += initialValue * 0.2;
        }
        break;
  
        case "vacuum cleaner": {
          initialValue += initialValue * 0.25;
        }
        break;
  
        case "mud": {
          initialValue -= initialValue * 0.1;
        }
        break;
      }
    }
  
    let finalValue = `The car is ${initialValue.toFixed(2)}% clean.`;
  
    console.log(finalValue);
  }
  
  // Example usage:
//   carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]);
  carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])
  
