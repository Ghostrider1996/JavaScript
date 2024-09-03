function averageLength(str1, str2, str3) {
    let strInput = [str1, str2, str3];
    let totalLength = 0;

    for (const str of strInput) {
        const elementLength = str.length;
        totalLength += elementLength;
    }

    let averageLength = Math.round(totalLength / strInput.length);

    console.log(totalLength);  
    console.log(averageLength); 
}

// averageLength('chocolate', 'ice cream', 'cake');
averageLength('pasta', '5', '22.3');
