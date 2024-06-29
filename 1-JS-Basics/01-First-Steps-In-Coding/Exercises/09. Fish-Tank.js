function fishTank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    const tankVolume = length * width * height
    const occupiedVolumePercent = percent / 100
    const volumeInLiters = tankVolume / 1000

    let waterLitersRequired = volumeInLiters * (1 - occupiedVolumePercent)

    console.log(waterLitersRequired);
}
fishTank(["85", "75", "47", "17"])
fishTank(["105", "77", "89", "18.5"])
