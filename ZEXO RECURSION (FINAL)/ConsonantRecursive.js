/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/
function consonantCounterRecursive(sentences) {
  
  if (sentences.length === 0) {
    return 0
  } else {
    var tampung = ''
    var iseng = ''
    for (var i = 0; i < sentences.length; i++) {
      if (isNaN(sentences[i]) === true) {
        if (sentences[i] === sentences[i].toUpperCase()) {
          if (i > 0) {
            tampung += sentences[i].toLowerCase()
          } else {
            iseng += sentences[i].toLowerCase()
          }
        } else {
          if (i > 0) {
            tampung += sentences[i]
          } else {
            iseng += sentences[i]
          }
        }
      }
    }
    sentences = tampung
    if (iseng === 'a' || iseng === 'i' || iseng === 'u' || iseng === 'e' || iseng === 'o') {
      return 0 + consonantCounterRecursive(sentences)
    } else {
      return 1 + consonantCounterRecursive(sentences)
    }
    
  }
}



console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3