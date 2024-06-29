function depositInfo(input){
   let depositSum = Number(input[0]);
   let depositTerm = Number(input[1]);
   let annualInterest = Number(input[2]);

   let sumAfterTerm = depositSum + depositTerm * ((annualInterest / 100 * depositSum) / 12);

   console.log(sumAfterTerm);
}
depositInfo(["200", "3", "5.7"])
depositInfo(["2350", "6", "7"])


