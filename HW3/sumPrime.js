function sumPrimes(num) {
  var sumArr= [];
  for(var i=0;i<=num;i++){
    if(isPrime(i))
      sumArr.push(i);
  }

  sumArr = sumArr.reduce(function(a,b){
    return a+b;
})

  return sumArr;
}

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i === 0)
            return false;
    }
    return true;
}

console.log(sumPrimes(100));