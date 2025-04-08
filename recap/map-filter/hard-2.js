// 🎯 Buat fungsi yang:
// - Ambil produk dengan harga antara 1jt - 5jt
// - Tambahkan properti diskon: 10%
// - Hitung harga setelah diskon
// - Urutkan dari harga diskon termurah ke termahal

// 📤 Contoh Output:
// getProdukDiskon(produk) ➜ [
//   { nama: 'Monitor', hargaAsli: 1500000, hargaDiskon: 1350000 },
//   { nama: 'HP', hargaAsli: 3000000, hargaDiskon: 2700000 }
// ]

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

// TODO:
const getProdukDiskon = (produk) => {
    // kerjain di sini
    return produk.filter((item) => item.harga >= 1_000_000 && item.harga <= 5_000_000).map((item) => ({ nama: item.nama, hargaAsli: item.harga, hargaDiskon: Math.floor(item.harga * 0.9) })).sort((a, b) => a.hargaDiskon - b.hargaDiskon)
};

console.log(getProdukDiskon(produk));