function countChar(str) {
  let charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

let result = countChar("aabccadeaac");
console.log(result); // Output: { a: 5, b: 1, c: 3, d: 1, e: 1 }

//source: chatgpt
