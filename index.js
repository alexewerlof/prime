var primeCache = [];
var max = 1000000;

for (var i = 3; i < max; i+=2) {
  if (!primeCache.some(p => i % p === 0)) {
    primeCache.push(i);
    // console.log(i);
  }
}

console.dir(primeCache);
