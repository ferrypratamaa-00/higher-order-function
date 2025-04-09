// 🎯 Goal:
// Buat fungsi getProdukMengandung(kata) buat cari produk yang nama-nya mengandung kata tertentu.

// 📜 Rules:
// - Gunakan `forEach()`
// - Return array berisi nama produk yang mengandung kata
// - Case-insensitive (huruf besar/kecil nggak ngaruh)

// 📦 Contoh Output:
// getProdukMengandung("sa") ➜ ["Saus"]
// getProdukMengandung("in") ➜ ["Mie Instan"]

const produk = [
    { nama: "Mie Instan", supplier: "Indofood" },
    { nama: "Saus", supplier: "Indofood" },
    { nama: "Kerupuk", supplier: "Indofood" },
];

// TODO:
const getProdukMengandung = (kata) => {
    // kerjain di sini brooo
    const newKata = [];
    produk.forEach((item) => {
        const { nama } = item;
        if (nama.toLowerCase().includes(kata.toLowerCase()))
            newKata.push(item.nama);
    });
    return newKata;
};

console.log(getProdukMengandung("sa"));
console.log(getProdukMengandung("in"));
