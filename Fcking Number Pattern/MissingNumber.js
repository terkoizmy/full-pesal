/*
================
MISSING NUMBER
================

description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/

function missingNum(arr) {
  var tampung = []
  for (var i = 0 ; i < arr.length ; i++){
    for (var j = 0 ; j <arr[i].length ; j++){
    if (arr[i][j] != ' '){
      var x = 0
      x += arr[i][j]
      tampung.push(x)
    }
  }
}
var max = 0
var min = tampung[0]
for (var i = 0 ; i < tampung.length ; i++){
  if (min > tampung[i]){
    min = tampung[i]
  }
  if (max < tampung[i]){
    max = tampung[i]
  }
}

 var hasil = []
for (var i = min ; i <= max ; i++){
  let ass = false
  for (var j = 0; j < tampung.length; j++){
    if (tampung[j] === i){
      ass = true
    }
  }

  if (ass === false) {
    hasil.push(i)
  }
}




return hasil
}


console.log(missingNum([
  [3, ' ', 5],
  [1, ' ', 7],
  [9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
  [2, ' '],
  [' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
  [11, ' ', 13],
  [17, ' ', 19],
  [' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
  [3, ' ', 5, 15],
  [1, ' ', 7, 13],
  [9, ' ', ' ', 12],
  [' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []