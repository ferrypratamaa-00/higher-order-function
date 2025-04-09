// ✅ Level 3 – Semua Produk dari Supplier Harus Mengandung Huruf

// 🎯 Goal:
// Buat fungsi isSemuaDariMengandung(supplier, huruf)
// ➜ true kalau semua produk dari supplier tsb mengandung huruf (case-insensitive)

// 📜 Rules:
// - Gunakan `every()`
// - Return boolean

// 📦 Contoh Output:
// isSemuaDariMengandung("Mayora", "e") ➜ true
// isSemuaDariMengandung("Indofood", "x") ➜ false

const produk = [
    { nama: "Energen", supplier: "Mayora" },
    { nama: "Sereal Enak", supplier: "Mayora" },
    { nama: "Saus", supplier: "Indofood" },
];

// TODO:
const isSemuaDariMengandung = (supplier, huruf) => {
    // kerjain di sini brooo
    return produk
        .filter((item) => item.supplier == supplier)
        .every((item) => item.nama.includes(huruf));
};

console.log(isSemuaDariMengandung("Mayora", "e"));
console.log(isSemuaDariMengandung("Indofood", "x"));
