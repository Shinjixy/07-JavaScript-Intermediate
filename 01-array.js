// Soal Nomor 1
// Kamu diminta untuk membuat sebuah fungsi reverse yang mana akan membalik sebuah array, fungsi reverse memiliki sepsifikasi sebagai berikut:

// memiliki 1 parameter yaitu:
//  arr [Array] => array yang akan kita manipulasi nilainya
// return value [Number] berupa sebuah array baru yang sudah terbalik
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    // memisahkan asal array lalu direverse
    return arr.slice().reverse();
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Soal Nomor 02
// Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 1 parameter:
//      arr [Array of Number] => array 1 dimensi dengan nilai Number
// return value [Number] total angka yang melebihi nilai rata-rata

const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr){

    // memilih array berdasarkan rata-rata
    let avg = arr.reduce((a, b) => a + b, 0) / arr.length;

    // memilih array berdasarkan rata-rata
    const result = arr.filter(arr => arr > avg);

    return result.length
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// Soal - 03
// Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam array multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:

// memiliki 2 parameter:
//      arr [Array] => array multi dimensi yang akan kita proses
//      num [Number] => angka yang ingin kita cari
// return value [Number]
//      fungsi akan mengembalikan null apabila angka yang dicari tidak  ditemukan
//      fungsi akan mengembalikan index dari angka yang dicari

// Langkah-langkah pengerjaan:

// karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
// setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
// apabila kita tidak menemukan nilai tersebut maka kembalikan null
// dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)

const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num){
    
    // menggabungkan arrays ke dalam array
    let merged = [].concat.apply([], arr);

    // mencari num berdasarkan index
    let result = merged.indexOf(num)

    if (result > 0) {
        return result;
    }else {
        return null
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));