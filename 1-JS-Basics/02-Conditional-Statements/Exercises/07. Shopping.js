function shoping(input){
    let peterBudget = Number(input[0]);
    let GPUCount = Number(input[1]);
    let CPUCount = Number(input[2]);
    let RAMCount = Number(input[3]);
    let gpuPrice = 250;
    let discount = 0;

    let cpuPrice = (GPUCount * gpuPrice) * 0.35
    let ramPrice = (GPUCount * gpuPrice) * 0.1

    let totalPrice = GPUCount * gpuPrice + //
    CPUCount * cpuPrice + RAMCount * ramPrice

    if (GPUCount > CPUCount){
        discount = totalPrice * 0.15
    } else {
        discount = discount
    }

    let finalCost = totalPrice - discount

    if (finalCost > peterBudget) {
        console.log(`Not enough money! You need ${(finalCost - peterBudget).toFixed(2)} leva more!`);
    } else if ([peterBudget > finalCost]){
        console.log(`You have ${(peterBudget - finalCost).toFixed(2)} leva left!`);
    }
}
shoping(["900","2","1","3"])
shoping(["920.45","3","1","1"])