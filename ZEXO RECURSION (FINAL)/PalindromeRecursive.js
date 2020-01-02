/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/


function palindromeRecursive(sentence) {
    function pesal (num){
        if (num === sentence.length){
            return ''
        } else {
            return sentence[num] + pesal(num + 1)
        }
    }

    function gusion (num){
        if(num === -1){
            return ''
        } else {
            return sentence[num] + gusion(num - 1)
        }
    }

    if (pesal(0) === gusion(sentence.length - 1)) {
        return true
    } else {
        return false
    }

}

// TEST CASES
console.log(palindromeRecursive('katak')); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false