function areaOfFigures(input) {

    let figureType = input[0];

    if (figureType == "square") {
        let length = Number(input[1]);
        let area = (length * length).toFixed(3);

        console.log(area);

    } else if (figureType == "rectangle") {
        let length = Number(input[1]);
        let length2 = Number(input[2]);
        let area = (length * length2).toFixed(3);

        console.log(area);

    } else if (figureType == "circle") {
        let radious = Number(input[1]);
        let area = (Math.PI * (radious * radious)).toFixed(3);


        console.log(area);

    } else if (figureType == "triangle") {
        let length = Number(input[1]);
        let height = Number(input[2]);
        let area = (length * height / 2).toFixed(3);

        console.log(area);
    }
}
areaOfFigures(["square", "5"])
areaOfFigures(["rectangle", "7", "2.5"])
areaOfFigures(["circle", "6"])
areaOfFigures(["triangle", "4.5", "20"])
