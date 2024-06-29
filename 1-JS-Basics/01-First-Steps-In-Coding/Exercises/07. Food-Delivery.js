    function foodDelivery(input){
        let chickenMenus = Number(input[0]);
        let fishMenus = Number(input[1]);
        let vegiterianMenus = Number(input[2]);

        const chickenPrice = 10.35
        const fishPrice = 12.40
        const vegiterianPrice = 8.15
        const delivery = 2.50

        let totalCost = chickenMenus * chickenPrice + //
        fishMenus * fishPrice + //
        vegiterianMenus * vegiterianPrice

        const desertCost = totalCost * 0.2

        let finalCost = totalCost + desertCost + delivery

        console.log(finalCost);
    }
foodDelivery(["2","4","3 "])
foodDelivery(["9","2","6"])