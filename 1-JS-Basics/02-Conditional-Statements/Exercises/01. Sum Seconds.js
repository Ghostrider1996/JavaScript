function sumSeconds(input){

    let competitor1Time = Number(input[0]);
    let competitor2Time = Number(input[1]);
    let competitor3Time = Number(input[2]);
    const totalTime = competitor1Time + //
    competitor2Time + competitor3Time

    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
    }
}
sumSeconds(["35","45","44"])
sumSeconds(["22","7", "34"])
sumSeconds(["50","50","49"])
sumSeconds(["14","12","10"])

