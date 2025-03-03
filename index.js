const fs = require('fs'); // Pastikan 'fs' sudah di-import

console.log('membaca file json...'); // mulai membaca

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
        console.log("aduh error");
    } else {
        try {
            const parsedData = JSON.parse(data); // Simpan hasil parsing ke variabel
            console.log(parsedData.nama); // Menampilkan nilai 'nama' dari JSON
        } catch (parseError) {
            console.log("Error parsing JSON:", parseError.message);
        }
    }
});

console.log('selesai membaca file json ...'); // selesai
