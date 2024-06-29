function greaterNumber(input){
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);

    if (number1 > number2) {
        console.log(number1);
    }else {
        console.log(number2);
    }
}
greaterNumber(["5","3"])
greaterNumber(["3","5"])
greaterNumber(["10","10"])
greaterNumber(["-5","5"])

