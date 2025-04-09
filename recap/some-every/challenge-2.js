// ✅ Level 2 – Cek Ada Produk dari Supplier Tertentu

// 🎯 Goal:
// Buat fungsi isAdaDari(supplier) ➜ true kalau ada produk dari supplier tsb (case-sensitive)

// 📜 Rules:
// - Gunakan `some()`
// - Return boolean

// 📦 Contoh Output:
// isAdaDari("Mayora") ➜ true
// isAdaDari("Wings") ➜ false

const produk = [
    { nama: "Energen", supplier: "Mayora" },
    { nama: "Kerupuk", supplier: "Indofood" },
];

// TODO:
const isAdaDari = (supplier) =>
    produk.some((item) => item.supplier.includes(supplier));

console.log(isAdaDari("Mayora"));
console.log(isAdaDari("Wings"));
