// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    delay(i)
}

function delay(i) {
        setTimeout(() => console.log("second log: ", i++), 100); // 02 - Kedua }
    }


// 1. synchronous merupakan proses render yang dilakukan oleh browser secara berurutan dan merupakan render default dari browser.
// 2. asynchronous merupakan proses render yang dilakukan oleh browser dengan tidak secara berurut atau tidak perlu menunggu proses sebelumnya dieksekusi.
// 3. Ya, kita dapat menerapkannya pada browser
// 4. Output yang dihasilkan adalah first log: 1-5 dan second log: 6 (dirender lima kali)
// 5. karena setTimeout tidak berjalan sampai for loop selesai dieksekusi. Ketika selesai dieksekusi value telah selesai dieksekusi, yaitu nilai 5, nilai tidak bertambah lagi.
