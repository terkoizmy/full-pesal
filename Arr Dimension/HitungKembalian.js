/**
================
Hitung Kembalian
================

buatlah function yang akan menghitung nominal dan jumlah pecahan pengembalian transaksi.
function tersebut akan menerima 2 parameter parameter pertama adalah nilai pembayaran, 
parameter kedua adalah nilai yang harus dibayarkan. 

Code dibuat se dinamis mungkin untuk menghandle apabila ketersediaan uang nominal dan jumlahnya
diubah-ubah dan asumsi uang kembaliannya selalu cukup dengan jumlah ketersediaan uang
 
*/

function hitungKembalian(bayar, harga) {
  //your code here
  var hasil = {}
 var recehan = [100000 , 50000 , 20000 , 10000 , 5000 , 2000]
 var trecehan = 0
 var kembalian = bayar - harga
 var p = 5

 if ( bayar < harga){
   return 'Uang Tidak Mencukupi'
 }


 for (var i = 0 ; i < recehan.length ; i++ ){
   if (kembalian - recehan[i] >= 0 ){
    kembalian -= recehan[i]
    trecehan += 1
    hasil[recehan[i]] = trecehan
    i -= 1
      if (trecehan ===  p){
        trecehan = 0
        i += 1
      }
   } else {
     trecehan = 0
   }

   if (hasil[recehan[recehan.length - 1]] === p){
     p += 5
     i =-1
   }
 }
return hasil
}

// Test Case
console.log(hitungKembalian(1000000, 755000));
/*
output
  { 
    '5000': 1, 
    '20000': 2, 
    '100000': 2 
  }
*/

// Test Case
console.log(hitungKembalian(40000, 35000));
/*
output
  { '5000': 1 }
*/

// Test Case 3
console.log(hitungKembalian(920000, 80000));
/*
output
  { 
    '10000': 1, 
    '20000': 4, 
    '50000': 5, 
    '100000': 5 
  }
*/

// TEST CASE 4
console.log(hitungKembalian(50000, 50000)); // {}

// TEST CASE 5
console.log(hitungKembalian(50000, 500000)); // Uang tidak cukup