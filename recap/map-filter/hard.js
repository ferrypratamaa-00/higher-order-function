// 🎯 Ambil semua produk dengan harga di atas 1 juta dan nama mengandung huruf "o"
// Lalu ubah jadi format:
// { nama: "Monitor", diskon: "10%", hargaAkhir: [harga setelah diskon] }

// 📤 Output:
// [
//   { nama: "Laptop", diskon: "10%", hargaAkhir: 7200000 },
//   { nama: "Monitor", diskon: "10%", hargaAkhir: 1350000 }
// ]

// ✅ Rules:
// - Pakai filter() dan map()
// - Hitung diskon 10%
// - Case-insensitive (nama mengandung "o" atau "O")

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

// TODO: function produkDiskonSpesial(produk)

const produkDiskonSpesial = (produk) => {
    return produk.filter((item) => item.harga > 1_000_000 && item.nama.toLowerCase().includes("o")).map((item) => {
        return {
            nama: item.nama,
            diskon: "10%",
            hargaAkhir: Math.floor(item.harga * 0.9)
        }
    })
}

console.log(produkDiskonSpesial(produk));