var hurup = "abcdefghijklmnopqrstuvwxyz";
function ubahHuruf(kata) {
  var output = "";
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < hurup.length; j++) {
      if (kata[i] === hurup[j]) {
        output += hurup[j + 1];
      }
    }
  }
  return output;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohb
