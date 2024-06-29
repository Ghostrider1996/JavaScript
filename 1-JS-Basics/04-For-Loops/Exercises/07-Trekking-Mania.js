function trekMania(input) {

    let groupsCount = Number(input[0]) ;

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeopleCount = 0;

    for (i = 1; i <= input.length; i++) {

        let peopleCount = Number(input[i])
        if (peopleCount <= 5) {
            musala += peopleCount
            totalPeopleCount += peopleCount
        } else if (peopleCount >= 6 && peopleCount <= 12) {
            monblan += peopleCount
            totalPeopleCount += peopleCount
        } else if (peopleCount >= 13 && peopleCount <= 25) {
            kilimanjaro += peopleCount
            totalPeopleCount += peopleCount
        } else if (peopleCount >= 26 && peopleCount <= 40) {
            k2 += peopleCount
            totalPeopleCount += peopleCount
        } else if (peopleCount >= 41) {
        everest += peopleCount
        totalPeopleCount += peopleCount
    }

    }

    let musalaPercent = musala / totalPeopleCount * 100
    let monblanPercent = monblan / totalPeopleCount * 100
    let kilimanjaroPercent = kilimanjaro / totalPeopleCount * 100
    let k2Percent = k2 / totalPeopleCount * 100
    let everestPercent = everest / totalPeopleCount * 100

    console.log(`${musalaPercent.toFixed(2)}%`);
    console.log(`${monblanPercent.toFixed(2)}%`);
    console.log(`${kilimanjaroPercent.toFixed(2)}%`);
    console.log(`${k2Percent.toFixed(2)}%`);
    console.log(`${everestPercent.toFixed(2)}%`);
}
trekMania(["10","10","5","1","100","12","26","17","37","40","78"])
trekMania(["5","25","41","31","250","6"])

