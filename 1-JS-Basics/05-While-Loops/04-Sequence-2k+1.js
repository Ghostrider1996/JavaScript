function sequence(input) {

    let num = Number(input[0]);
    let counter = 1

    while (counter <= num) {
        console.log(counter);
        counter = counter * 2 + 1;
        
    }
}
sequence(["3"])
sequence(["8"])
sequence(["17"])
sequence(["31"])