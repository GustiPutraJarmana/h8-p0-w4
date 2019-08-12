function fpb(angka1, angka2) {
  var factor1 = [];
  var factor2 = [];
  for (var i = 1; i <= angka1; i++) {
    if (angka1 % i === 0) {
      factor1.push(i);
    }
  }
  for (var i = 1; i <= angka2; i++) {
    if (angka2 % i === 0) {
      factor2.push(i);
    }
  }

  var output = [];
  for (var i = 0; i < factor1.length; i++) {
    for (var j = 0; j < factor2.length; j++) {
      if (factor1[i] === factor2[j]) {
        output.push(factor2[j]);
      }
    }
  }
  var compare = output[0];
  for (var i = 0; i < output.length; i++) {
    if (output[i] > compare) {
      compare = output[i];
    }
  }
  return compare;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
