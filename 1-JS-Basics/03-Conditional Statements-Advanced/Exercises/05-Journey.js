function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let jurneyType = "";
    let destination = "";
    let costBudgetPercent = 0;


    if (season == "summer") {
        jurneyType = "Camp"
        if (budget <= 100) {
            destination = "Bulgaria";
            costBudgetPercent = 0.30;
        } else if (budget <= 1000) {
            destination = "Balkans";
            costBudgetPercent = 0.40;
        } else if (budget > 1000) {
            destination = "Europe";
            costBudgetPercent = 0.90;
            jurneyType = "Hotel";
        }
    } else if (season == "winter") {
        jurneyType = "Hotel"
        if (budget <= 100) {
            destination = "Bulgaria";
            costBudgetPercent = 0.70;
        } else if (budget <= 1000) {
            destination = "Balkans";
            costBudgetPercent = 0.80;
        } else if (budget > 1000) {
            destination = "Europe";
            costBudgetPercent = 0.90;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${jurneyType} - ${(budget * costBudgetPercent).toFixed(2)}`);
}
journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])

