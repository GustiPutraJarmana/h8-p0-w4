function cariMedian(arr) {
  console.log(arr.length);
  if (arr.length % 2 === 0) {
    var posisiM = arr.length / 2;
    return (arr[posisiM] + arr[posisiM - 1]) / 2;
  } else {
    var posisiM = arr.length / 2;
    posisiM = Math.floor(posisiM);
    return arr[posisiM];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
