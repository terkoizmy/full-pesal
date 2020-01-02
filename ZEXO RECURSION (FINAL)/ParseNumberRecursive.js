/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
var tampung = ''
var iseng = ''
equation = String(equation)
for (var i = 0 ; i < equation.length ; i++){
  if (i > 0){
    tampung += equation[i] 
  } else {
    iseng += equation[i]
  }
}
  if (equation.length === 1){
    if (Number(iseng) === 0){
      return ''
    } else {
      return iseng
    }
  } else {
    iseng = Number(iseng) * 10 ** tampung.length 
    if (Number(iseng) === 0){
      return parseNumber(equation)
    }  

    iseng = String(iseng) 
    if (equation.length === 2 && equation[1] === '0'){
      equation = tampung
      return iseng + parseNumber(equation)
    } 
    iseng += '+'
    equation = tampung
    return iseng + parseNumber(equation)
    
  }
}

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3