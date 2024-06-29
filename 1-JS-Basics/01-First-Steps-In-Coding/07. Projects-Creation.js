function projectCreation(input) {
    // Input
    let archi = input[0];
    let projectCount = Number(input[1]);
    // Logic
    const requiredTimeForSingleProject = 3;
    let totalTimeNeeded = projectCount * requiredTimeForSingleProject
    // Output
    console.log(`The architect ${archi} will need ${totalTimeNeeded} hours to complete ${projectCount} project/s.`);
}
// projectCreation(["George","4"]);
// projectCreation(["Sanya","9"])



