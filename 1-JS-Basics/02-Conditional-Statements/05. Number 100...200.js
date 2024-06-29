function numberBetween100And200(input){

    let number = Number(input[0]);

    if (number > 200){
        console.log("Greater than 200");     
    } else if (number < 100){
        console.log("Less than 100");
    } else if (100 < number < 200){
        console.log("Between 100 and 200");
    }
}
numberBetween100And200(["95"])
numberBetween100And200(["120"])
numberBetween100And200(["210"])

