function histogram(input) {

    let numCount = Number(input[0]);

    let c1 = 0
    let c2 = 0
    let c3 = 0
    let c4 = 0
    let c5 = 0

    for (i = 1; i <= numCount; i++) {
        let num = Number(input[i])
        if (num < 200) {
            c1 += 1
        } else if (num >= 200 && num < 400){
            c2 += 1
        } else if (num >= 400 && num < 600) {
            c3 += 1
        } else if (num >= 600 && num < 800) {
            c4 += 1
        } else if (num >= 800) {
            c5 += 1
        }
    }

    let p1 = c1 / numCount * 100
    let p2 = c2 / numCount * 100
    let p3 = c3 / numCount * 100
    let p4 = c4 / numCount * 100
    let p5 = c5 / numCount * 100

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
   
    
}
histogram(["3","1","2","999"])
