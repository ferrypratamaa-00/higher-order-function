// ✅ Level 1 – Cek Semua Produk Panjang Minimal

// 🎯 Goal:
// Buat fungsi isNamaMinimal(min) ➜ true kalau semua produk punya nama >= min karakter

// 📜 Rules:
// - Gunakan `every()`
// - Return boolean

// 📦 Contoh Output:
// isNamaMinimal(5) ➜ true
// isNamaMinimal(10) ➜ false

const produk = [{ nama: "Mie Instan" }, { nama: "Kerupuk" }, { nama: "Saus" }];

// TODO:
const isNamaMinimal = (min) => {
    // kerjain di sini brooo
    return produk.every((item) => item.nama.length >= min);
};

console.log(isNamaMinimal(5));
