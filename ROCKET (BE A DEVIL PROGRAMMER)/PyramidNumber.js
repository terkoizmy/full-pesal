/*
  //////////////////////
  pyramidNumberExtension
  //////////////////////

  Function pyramidNumberExtension adalah suatu fungsi kelanjutan dari pyramidNumber yang sudah dibuat.
  Function ini akan menerima parameter max yang bertipe data number, serta hanya berfungsi untuk menampilkan
  saja.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    55555
    4444
    333
    22
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
    3. Nilai rocket hanya ada 0 atau 100, jadi diutamakan mengerjakkan soal yang lain terlebih dahulu.
*/



var max = 5
var min = 0
for (var i = max ; i > 0 ; i--){
  var b = ''
  for (var j = i ; j > 0 ; j-- ){
  b += i
  min = i
  }
  console.log(b)
  if (b === '1'){
    for (var k = min + 1 ; k <= max ; k++){
      var c = ''
      for (var l = min ; l <= k ; l++){
        c += k
      }
      console.log(c)
    }
  }
}