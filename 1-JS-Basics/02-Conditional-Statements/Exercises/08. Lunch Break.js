function lunchBreak(input){

    let tvSeries = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8
    let restTime = breakDuration / 4

    let leftTime = breakDuration - (lunchTime + restTime)
    
    if (leftTime >= episodeDuration){
        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(leftTime - episodeDuration)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(episodeDuration - leftTime)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones","60","96"])
lunchBreak(["Teen Wolf","48","60"])
