var huruf = "abcdefghijklmnopqrstuvwxyza";
function ubahHuruf(kata) {
  var output = "";
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < huruf.length - 1; j++) {
      if (kata[i] === huruf[j]) {
        output += huruf[j + 1];
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
