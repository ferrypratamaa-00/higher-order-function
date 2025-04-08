// 🎯 Buat fungsi yang:
// - Filter nama produk yang punya huruf "o"
// - Ubah jadi objek {nama, panjangNama}
// - Urutkan dari panjang nama terpendek ke terpanjang

// 📤 Contoh Output:
// getProdukHurufO(produk) ➜ [
//   { nama: 'Mouse', panjangNama: 5 },
//   { nama: 'Monitor', panjangNama: 7 }
// ]
const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
  ];

// TODO:
const getProdukHurufO = (produk) => {
    // kerjain di sini
    return produk.filter((item)=> item.nama.includes("o")).map((item)=> ({nama : item.nama, panjangNama:item.nama.length})).sort((a,b)=> a.panjangNama - b.panjangNama)
  };
  

  console.log(getProdukHurufO(produk));