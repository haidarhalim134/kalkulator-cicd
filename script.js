
function performCalculation(expression) {

try {

// Peringatan: Penggunaan 'new Function' bisa berisiko jika input tidak aman.

// Untuk kalkulator sederhana ini, ini adalah pendekatan umum.

// Solusi yang lebih aman akan melibatkan parser ekspresi matematika.

const result = new Function('return ' + expression)();

if (isNaN(result) || !isFinite(result)) {

return 'Error'; // Tangani pembagian dengan nol atau hasil non-numerik

}

return result;

} catch (error) {

return 'Error';

}

}

// Ekspor fungsi untuk pengujian jika menggunakan modul Node.js (opsional untuk setup sederhana ini)

if (typeof module !== 'undefined' && module.exports) {

module.exports = { performCalculation };

}