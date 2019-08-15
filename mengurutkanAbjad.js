function urutkanAbjad(str) {
  var abjad = "abcdefghijklmnopqrstuvwqyz";
  var angka = [];
  for (var i = 0; i < str.length; i++) {
    angka.push(abjad.indexOf(str[i]));
  }

  for (var j = 0; j < angka.length; j++) {
    if (angka[j - 1] > angka[j]) {
      var tampung = angka[j - 1];
      angka[j - 1] = angka[j];
      angka[j] = tampung;
    }
  }
  var kata = "";
  for (var i = 0; i < angka.length; i++) {
    kata += abjad[angka[i]];
  }
  return kata;
}

// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
