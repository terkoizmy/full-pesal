/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================

[INSTRUKSI]

Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!

Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.

Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)
- Teruskan Sampai Semua SKILL INVOKER..

NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!

*/

function invokeSpell(input) {
    var quas = 0
    var wex = 0
    var exort = 0

    for (var i = 0 ; i < input.length ; i ++){
        if (input[i] === 'q'){
            quas += 1
        } else if ( input[i] === 'w'){
            wex += 1 
        }   else if ( input[i] === 'e'){
            exort += 1
        }
    }

    if (quas === 1 && wex === 1 && exort === 1 ){
        return "Deafening Blast"
    } else if (quas === 3 && wex === 0 && exort === 0){
        return "Cold Snap"
    } else if (quas === 1 && wex === 2 && exort === 0){
        return "Tornado"
    } else if (quas === 0 && wex === 2 && exort === 1){
        return "Alacrity"
    } else {
        return "combination does not exist"
    }
  
}

console.log(invokeSpell("qwe")); // Deafening Blast
console.log(invokeSpell("ewq")); // Deafening Blast
console.log(invokeSpell("qqq")); // Cold Snap
console.log(invokeSpell("wwq")); // Tornado
console.log(invokeSpell("wwe")); // Alacrity
console.log(invokeSpell("wew")); // Alacrity
console.log(invokeSpell("wqa")); // Combination does not exist
