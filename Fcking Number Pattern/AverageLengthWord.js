/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {

var tampung = words.split(" ")
var hasil = []
var max = 0


    for (var i = 0 ; i < tampung.length ; i++){
        var x = 0
        for (var j = 0 ; j < tampung[i].length ; j++){
        x += 1
        }
        if (max < x ){
            max = x
        }
    }

    if (max % 2 === 0 ){
        max = max / 2
    } else {
        max += 1 
        max /= 2
        max += 1
    }

    for (var i = 0 ; i < tampung.length ; i++){
    if (max === tampung[i].length){
        hasil.push(tampung[i])
    }
    }
    
    return hasil



    

    
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []