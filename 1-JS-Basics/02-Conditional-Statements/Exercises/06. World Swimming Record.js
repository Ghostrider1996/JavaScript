function worldSwimmingRecord(input){

    const worldRecordSeconds = Number(input[0]);
    const distanceMeters  = Number(input[1]);
    const meterSwumSeconds = Number(input[2]);

    let timePenalty = Math.floor(distanceMeters / 15) * 12.5
    let competitorTime = distanceMeters * meterSwumSeconds

    let ivanchoTime = competitorTime + timePenalty

    if (ivanchoTime < worldRecordSeconds){
        console.log(`Yes, he succeeded! The new world record is ${(ivanchoTime).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(ivanchoTime - worldRecordSeconds).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464","1500","20"])
worldSwimmingRecord(["55555.67","3017","5.03"])
