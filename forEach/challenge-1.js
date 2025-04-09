// 🎯 Goal:
// Buat fungsi printNamaProduk() buat nampilin nama semua produk ke console.

// 📜 Rules:
// - Gunakan `forEach()`
// - Jangan return apa-apa
// - Tulis format: "Produk: [nama]"

// 📦 Contoh Output:
// Produk: Mie Instan
// Produk: Saus
// ...

const produk = [
    { nama: "Mie Instan", supplier: "Indofood" },
    { nama: "Saus", supplier: "Indofood" },
    { nama: "Kerupuk", supplier: "Indofood" },
];

// TODO:
const printNamaProduk = (produk) => {
    // kerjain di sini brooo
    produk.forEach((item) => {
        console.log(`Produk: ${item.nama}`);
    });
};

printNamaProduk(produk);
