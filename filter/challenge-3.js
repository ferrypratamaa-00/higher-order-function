// Bikin fungsi yang memfilter produk berdasarkan kategori harga:
// "murah" → harga < 500.000
// "menengah" → 500.000 ≤ harga ≤ 5.000.000
// "mahal" → harga > 5.000.000

// 📤 Contoh Output:

// filterProdukByKategori(produk, "mahal");
// // ➜ hanya produk dengan harga > 5jt

// filterProdukByKategori(produk, "menengah");
// // ➜ produk dengan harga 500rb s.d. 5jt

// filterProdukByKategori(produk, "murah");
// // ➜ harga < 500rb

// ✅ Rules:
// - Pakai filter()
// - Case-insensitive input kategori ("MAHAL" sama dengan "mahal")
// - Handle jika kategori nggak valid → return array kosong

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

// TODO: Implement function filterProdukByKategori(produk, kategori)


const daftarKategori = ["mahal", "menegah", "murah"]
const filterProdukByKategori = (produk = [], kategori = "") => {
    const lowerKategori = kategori.toLowerCase();
    if (!daftarKategori.includes(lowerKategori)) return [];

    return produk.filter((prod) => {
        const harga = prod.harga;

        if (lowerKategori === "mahal") return harga > 5_000_000;
        if (lowerKategori === "menengah") return harga >= 500_000 && harga <= 5_000_000;
        if (lowerKategori === "murah") return harga < 500_000;
    })
};

console.log("mahal", filterProdukByKategori(produk, "mahal"));
console.log("menegah", filterProdukByKategori(produk, "menegah"));
console.log("murah", filterProdukByKategori(produk, "murah"));
console.log("cukup", filterProdukByKategori(produk, "cukup murah"));