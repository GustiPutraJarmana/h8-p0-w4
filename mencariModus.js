function cariModus(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var index = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        index = index + 1;
      }
    }
    result.push(index);
    if (index === arr.length) {
      return -1;
    }
  }
  var max = result[0];
  var maxNum = arr[0];
  for (var x = 0; x < result.length; x++) {
    if (max < result[x]) {
      max = result[x];
      maxNum = arr[x];
    }
  }
  if (max === 1) {
    return -1;
  }
  return maxNum;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
