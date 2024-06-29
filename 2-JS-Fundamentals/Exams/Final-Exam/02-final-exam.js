function findValidEggs(text) {
    // Regular expression to match valid eggs
    let regex = /[@#]+([a-z]{3,})[^a-z\d]*\/(\d+)\/[^a-z\d]*/gi;
    let validEggs = [];
    
    // Loop through matches in the text
    let match;
    while ((match = regex.exec(text[0])) !== null) {
        let color = match[1];
        let amount = match[2];
        validEggs.push(`You found ${amount} ${color} eggs!`);
    }
    
    // Print valid eggs
    validEggs.forEach(egg => console.log(egg));
}

// Test cases
// findValidEggs("@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/");
// findValidEggs("#@##@red@#/8/@rEd@/2/#@purple@////10/");