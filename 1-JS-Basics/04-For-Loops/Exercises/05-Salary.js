function salary(input){

    let tabsCount = Number(input[0]);
    let salary = Number(input[1]);
    
    let finalSalary = salary

    for (i = 2; i <= input.length; i++) {
        
        let tab = input[i]

        switch (tab) {
            case "Facebook":
                finalSalary -= 150
                break
            case "Instagram":
                finalSalary -= 100
                break
            case "Reddit":
                finalSalary -= 50
                break
            
            
        }
        
        if (finalSalary <= 0) {
            console.log("You have lost your salary.");
            break
        }

        
    }

    if (finalSalary > 0) {
        console.log(finalSalary);;
    } 
    
}
salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"])
salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"])

