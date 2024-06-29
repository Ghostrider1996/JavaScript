function skiTrip(input) {
    
    let days = Number(input[0]);
    let spaceType = input[1];
    let review = input[2];
    
    let price = 0;
    const nights = days - 1;
    const roomForOnePrice = 18;
    const apartmentPrice = 25;
    const presidentApartmentPrice = 35

    switch (spaceType) {
        case "room for one person":
            price = nights * roomForOnePrice;
            break;
        case "apartment":
            price = nights * apartmentPrice;
            if (nights < 10) {
                price *= 0.7
            } else if (nights <= 15) {
                price *= 0.65
            } else {
                price *= 0.5
            }
            break;
        case "president apartment":
            price = nights * presidentApartmentPrice;
            if (nights < 10) {
                price *= 0.9
            } else if (nights <= 15) {
                price *= 0.85
            } else {
                price *= 0.8
            }
            break;
    }
    if (review === "positive") {
        price *= 1.25
    } else {
        price *= 0.9
    }

    console.log(price.toFixed(2));
}
skiTrip(["14","apartment","positive"])
skiTrip(["30","president apartment","negative"])
