function cake(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let command = input[2];

    let totalCakePieces = width * lenght;
    let index = 3;

    while (command !== "STOP") {
        let cakePiece = Number(command)
        totalCakePieces -= cakePiece

        if (totalCakePieces < 0) {
            let piecesNeeded = Math.abs(totalCakePieces)
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "STOP") {
        console.log(`${totalCakePieces} pieces are left.`);
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

