function text(input) {
    let interaction = input[0]
    let index = 0


    while (true) {
        let interaction = input[index];
        index++
        if (interaction === "Stop") {
            break
        }
        console.log(interaction);

    }
}
text(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"])
