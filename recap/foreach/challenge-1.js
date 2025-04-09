// 🎯 Goal:
// Buat fungsi getProdukDenganKriteria(kata, panjangMinimal) buat cari produk
// yang nama-nya mengandung kata tertentu DAN panjang namanya >= panjangMinimal

// 📜 Rules:
// - Gunakan `forEach()`
// - Case-insensitive
// - Return array nama produk yang lolos semua kriteria

// 📦 Contoh Output:
// getProdukDenganKriteria("in", 10) ➜ ["Mie Instan"]

const produk = [
    { nama: "Mie Instan", supplier: "Indofood" },
    { nama: "Saus", supplier: "Indofood" },
    { nama: "Kerupuk", supplier: "Indofood" },
    { nama: "Energen", supplier: "Mayora" },
    { nama: "Sereal Enak", supplier: "Mayora" },
];

// TODO:
const getProdukDenganKriteria = (kata, panjangMinimal) => {
    // kerjain di sini brooo
    const newProduk = [];
    produk.forEach((item) => {
        const { nama } = item;
        if (
            nama.toLowerCase().includes(kata.toLowerCase()) &&
            nama.length >= panjangMinimal
        ) {
            newProduk.push(nama);
        }
    });

    return newProduk;
};

console.log(getProdukDenganKriteria("in", 10));
