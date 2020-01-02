/**

  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]


NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'

**/


function squareNumber(num) {
var ex = num * num
var tampung1 = []
var tampung = []
  for (var i = 1 ; i <= ex ; i++){
    tampung.push(i)
    if(tampung.length === num) {
      if (tampung[0] % 2 === 0 || tampung[num - 1] % 8 === 0){
        tampung.reverse(tampung[1])
      }
      tampung1.push(tampung)
      tampung = [] 
    } 
  }
  var hasil = []
  var tampung3 = []
  for (var i = 0 ; i < tampung1.length ; i++){
    for (var j = 0 ; j <tampung1[i].length ; j++){
      if(tampung1[i][j] % 4 === 0){
        tampung3.push('#')
      } else if (tampung1[i][j] % 2 === 0 ){
        tampung3.push('o')
      } else {
        tampung3.push('x')
      }
      if (tampung3.length === num){
        hasil.push(tampung3)
        tampung3 = []
      }
    }
  }

  if (num <= 2){
    return 'minimal 3'
  }


return hasil
}

console.log(squareNumber(3));
// [ [x, o, x],  [o, x, #], [x, #, x] ]

console.log(squareNumber(4));
// [ [ x, o, x, # ],
//   [ #, x, o, x ],
//   [ x, o, x, # ],
//   [ #, x, o, x ] ]

console.log(squareNumber(5));
// [ [ x, o, x, #, x ],
//   [ o, x, #, x, o ],
//   [ x, #, x, o, x ],
//   [ #, x, o, x, # ],
//   [ x, o, x, #, o ] ]

console.log(squareNumber(2)); // Minimal input adalah 3