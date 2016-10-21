const bignum = require('bignum');

var primeCache = [];
// Can be a numerical literal or a string containing it
var max = bignum(100000);

function isPrime(n) {
  var prob = n.probPrime();
  if (prob === 'maybe') {
    // if this number is not dividable to any prime currently found
    return !primeCache.some(p => i.mod(p) === 0);
  } else {
    return prob;
  }
}

for (let i = bignum(3); i.lt(max); i = i.add(2)) {
  if (isPrime(i)) {
    primeCache.push(i);
  }
}

console.log(primeCache.join('\t'));
