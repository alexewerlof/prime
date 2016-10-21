const bignum = require('bignum');

var primeCache = [];
// Can be a numerical literal or a string containing it
var max = bignum(10000000);

function isPrime(n) {
  var prob = n.probPrime();
  if (prob === 'maybe') {
    // if this number is not dividable to any prime currently found
    return !primeCache.some(p => i.mod(p) === 0);
  } else {
    return prob;
  }
}

var counter = 0;
for (let i = bignum(3); i.lt(max); i = i.add(2)) {
  if (isPrime(i)) {
    primeCache.push(i);
  }
  counter++;
  if (counter > 1000) {
    console.log(`just passed ${i.div(1000).toString()}K`);
    counter = 0;
  }
}

console.log(primeCache.join('\t'));
