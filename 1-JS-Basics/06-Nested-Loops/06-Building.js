function building(input) {
    
    let buildingLevel = Number(input[0]);
    let roomCount = Number(input[1]);

    for (let level = buildingLevel; level >= 1; level--) {
        const arr = [];

        let startingLetter = "";

        if (level === buildingLevel) {
            startingLetter = "L";
        } else if (level % 2 === 0) {
            startingLetter = "O";
        } else {
            startingLetter = "A";
        }

        for (let room = 0; room < roomCount; room++) {
            arr.push(`${startingLetter}${level}${room}`);
        }

        console.log(...arr);
    }
}
building(["6","4"])
