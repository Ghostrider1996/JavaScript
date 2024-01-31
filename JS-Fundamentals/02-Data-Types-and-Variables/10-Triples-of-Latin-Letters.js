function lab10(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        let letter1 = String.fromCharCode("a".charCodeAt(0) + i);
        let letter2 = String.fromCharCode("a".charCodeAt(0) + j);
        let letter3 = String.fromCharCode("a".charCodeAt(0) + k);

        console.log(`${letter1}${letter2}${letter3}`);
      }
    }
  }
}
// lab10(2);
lab10(3);
