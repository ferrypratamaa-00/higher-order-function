// 🎯 Bikin fungsi yang:
// - Ambil produk dengan harga > 1jt
// - Ubah namanya jadi huruf besar semua
// - Urutin dari nama A-Z

// 📤 Contoh Output:
// getProdukMahalAZ(produk) ➜ ['HP', 'LAPTOP', 'MONITOR']

const produk = [
  { id: 1, nama: "Laptop", harga: 8000000 },
  { id: 2, nama: "HP", harga: 3000000 },
  { id: 3, nama: "Mouse", harga: 200000 },
  { id: 4, nama: "Monitor", harga: 1500000 },
  { id: 5, nama: "Charger", harga: 500000 },
];

// TODO:
const getProdukMahalAZ = (produk) => {
  // kerjain di sini
  return produk.filter((item)=> item.harga > 1_000_000).map((item)=> item.nama.toUpperCase()).sort((a,b)=> a.localCompare(b))
};

console.log(getProdukMahalAZ(produk));