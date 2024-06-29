function numberOperations(input) {

    const n1 = Number(input[0]);
    const n2 = Number(input[1]);
    let operator = (input[2]);

    let result = 0;
    let numberType = ""

    switch (operator) {
        case "+":
            result = n1 + n2
            numberType = result % 2 === 0 ? "even" : "odd";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${numberType}`);
            break;
        case "-":
            result = n1 - n2
            numberType = result % 2 === 0 ? "even" : "odd";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${numberType}`);
            break;
        case "*":
            result = n1 * n2
            numberType = result % 2 === 0 ? "even" : "odd";
            console.log(`${n1} ${operator} ${n2} = ${result} - ${numberType}`);
            break;
        case "/":
            result = n1 / n2
            
            if (n2 !== 0) {
                console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
                } else {
                    console.log(`Cannot divide ${n1} by zero`);
                }
            break;
        case "%":
            result = n1 % n2
            
            if (n2 !== 0) {
            console.log(`${n1} ${operator} ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
    }
}
numberOperations(["10","12","+"])
numberOperations(["10","1","-"])
numberOperations(["7","3","*"])
numberOperations(["123","12","/"])
numberOperations(["10","3","%"])
numberOperations(["112","0","/"])
numberOperations(["10","0","%"])
