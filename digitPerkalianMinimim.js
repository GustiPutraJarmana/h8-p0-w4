function digitPerkalianMinimum(angka) {
  var result = [];
  for (var i = 0; i <= angka; i++) {
    for (var j = 0; j <= angka; j++) {
      if (i * j === angka) {
        result.push(i.toString() + j.toString());
      }
    }
  }
  output = result[0];
  for (var i = 0; i < result.length / 2; i++) {
    if (output < result[i]) {
      output = result[i];
    }
  }
  return output.length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
