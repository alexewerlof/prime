const bignum = require('bignum');

var primeCache = [];
// Can be a numerical literal or a string containing it
var max = bignum(5000000);

function isPrime(n, primeCache) {
  var prob = n.probPrime();
  if (prob === 'maybe') {
    // if this number is not dividable to any prime currently found
    return !primeCache.some(p => i.mod(p) === 0);
  } else {
    return prob;
  }
}

function findPrimesUnder(max, primeCache) {
  var counter = 0;
  for (let i = bignum(3); i.lt(max); i = i.add(2)) {
    if (isPrime(i, primeCache)) {
      primeCache.push(i);
    }
    counter++;
    if (counter > 1000000) {
      console.log(`just passed ${i.div(1000000).toString()}M so far we have ${primeCache.length} primes...`);
      counter = 0;
    }
  }
}

findPrimesUnder(max, primeCache);

console.log(primeCache.join('\t'));
