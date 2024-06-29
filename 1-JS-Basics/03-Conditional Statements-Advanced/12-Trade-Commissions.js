function commissions(input) {

    let town = input[0];
    let salesVolume = Number(input[1]);
    let commissionsPercent = 0;

    switch (town) {
        case "Sofia":
            if (salesVolume >= 0 && salesVolume <= 500) {
                commissionsPercent = 0.05
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commissionsPercent = 0.07
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commissionsPercent = 0.08
            } else if (salesVolume > 10000) {
                commissionsPercent = 0.12
            } else if (salesVolume < 0) {
                console.log("error");
            }
            break;

        case "Varna":
            if (salesVolume >= 0 && salesVolume <= 500) {
                commissionsPercent = 0.045
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commissionsPercent = 0.075
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commissionsPercent = 0.10
            } else if (salesVolume > 10000) {
                commissionsPercent = 0.13
            } else if (salesVolume < 0) {
                console.log("error");
            }
            break;

        case "Plovdiv":
            if (salesVolume >= 0 && salesVolume <= 500) {
                commissionsPercent = 0.055
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commissionsPercent = 0.08
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commissionsPercent = 0.12
            } else if (salesVolume > 10000) {
                commissionsPercent = 0.145
            } else if (salesVolume < 0) {
                console.log("error");
            }
            break;

        default: {
            console.log("error");
        }
    }

   let salesManPay = salesVolume * commissionsPercent
   
   if (salesManPay !== 0) {
    console.log(salesManPay.toFixed(2));
   }
}
commissions(["Sofia","1500"])
commissions(["Plovdiv","499.99"])
commissions(["Varna","3874.50"])
commissions(["Kaspichan","-50"])

