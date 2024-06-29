function vowelsSum(input) {

    let word = input[0];
    sum = 0

    for (i = 0; i <= word.length; i++){
        let letter = word[i]

        switch(letter) {
            case 'a':
                sum += 1
                break
            case "e":
                sum += 2
                break    
            case "i":
                sum += 3
                break    
            case "o":
                sum += 4
                break    
            case "u":
                sum += 5
                break
            default:
                break    
        }
    }
    console.log(sum);
}
vowelsSum(["hello"])
vowelsSum(["hi"])
vowelsSum(["bamboo"])
vowelsSum(["beer"])