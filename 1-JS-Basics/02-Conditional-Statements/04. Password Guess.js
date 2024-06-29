function passwordGuess(input) {

    let passwordGuess = input[0];
    const password = "s3cr3t!P@ssw0rd"

    if (passwordGuess == password){
        console.log("Welcome");
    }else {
        console.log("Wrong password!");
    }
}
passwordGuess(["qwerty"])
passwordGuess(["s3cr3t!P@ssw0rd"])
passwordGuess(["s3cr3t!p@ss"])

