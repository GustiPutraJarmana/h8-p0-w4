function naikAngkot(arrPenumpang) {
  var rute = ["A", "B", "C", "D", "E", "F"];
  if (!arrPenumpang) {
    return [];
  }
  var output = [];
  for (var i = 0; i < arrPenumpang.length; i++) {
    var hargaPerSport = 2000;
    var jarak =
      rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1]);
    var Angkotpenumpang = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: jarak * hargaPerSport
    };
    output.push(Angkotpenumpang);
  }
  return output;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
