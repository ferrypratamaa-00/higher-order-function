// 🎯 Ambil semua produk dengan nama panjang (lebih dari 5 huruf) lalu ubah ke format:
// { namaProduk: "Laptop", hurufTerakhir: "p" }

// 📤 Output:
// [
//   { namaProduk: "Laptop", hurufTerakhir: "p" },
//   { namaProduk: "Monitor", hurufTerakhir: "r" },
//   ...
// ]

// ✅ Rules:
// - Pakai filter() dan map()
// - Gunakan method .slice() atau .at(-1) untuk ambil huruf terakhir

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
  ];

// TODO: function transformProdukNamaPanjang(produk)

const transformProdukNamaPanjang =(produk)=> produk.filter((item)=> item.nama.length > 5).map((item)=> ({namaProduk : item.nama, hurufTerakhir: item.nama.at(-1) }))

console.log(transformProdukNamaPanjang(produk));