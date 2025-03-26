import { kalkulator } from './rumus.js';
import readline from 'readline';

// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Meminta input angka pertama
inputUser.question('Masukkan angka pertama: ', (angka1) => {
    // Meminta input angka kedua
    inputUser.question('Masukkan angka kedua: ', (angka2) => {
        // Meminta input operator
        inputUser.question('Masukkan operator (+, -, *, /): ', (operator) => {
            // Menampilkan hasil kalkulasi
            console.log(`Hasil: ${kalkulator(parseFloat(angka1), parseFloat(angka2), operator)}`);
            inputUser.close();
        });
    });
});

console.log("Program kalkulator selesai dijalankan!");