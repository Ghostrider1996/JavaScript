function summerOutfit(input) {

    const celsius = Number(input[0]);
    const dayStage = input[1];
    let outFit = "";
    let shoes = "";

    switch (dayStage) {
        case "Morning":
            if (celsius >= 10 && celsius <= 18) {
                outFit = "Sweatshirt"
                shoes = "Sneakers"
            } else if (celsius > 18 && celsius <= 24) {
                outFit = "Shirt"
                shoes = "Moccasins"
            } else if (celsius >= 25) {
                outFit = "T-Shirt"
                shoes = "Sandals"
            }
            break;
        case "Afternoon":
            if (celsius >= 10 && celsius <= 18) {
                outFit = "Shirt"
                shoes = "Moccasins"
            } else if (celsius > 18 && celsius <= 24) {
                outFit = "T-Shirt"
                shoes = "Sandals"
            } else if (celsius >= 25) {
                outFit = "Swim Suit"
                shoes = "Barefoot"
            }
            break;
        case "Evening":
            outFit = "Shirt";
            shoes = "Moccasins";
            break;
    }
    console.log(`It's ${celsius} degrees, get your ${outFit} and ${shoes}.`);
}
summerOutfit(["16","Morning"])
summerOutfit(["22","Afternoon"])
summerOutfit(["22","Evening"])