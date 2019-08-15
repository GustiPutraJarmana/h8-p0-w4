function changeMe(arr) {
  for (var i = 0; i < arr.length; i++) {
    var age = true;
    if (!arr[i][3] || arr[i][3] > new Date().getFullYear()) {
      age = "Invalid Birth Year";
    } else if (arr[i][3]) {
      age = new Date().getFullYear() - arr[i][3];
    }
    var people = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: age
    };
    console.log(people);
  }
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
