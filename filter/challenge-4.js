// 🧪 Bikin fungsi buat nyari produk yang namanya terdiri dari kurang dari 6 huruf

// ✅ Rules:
// - Gunakan filter()
// - Jangan peduliin huruf besar/kecil
// - Return semua produk yang nama-nya kurang dari 6 huruf

// 📤 Contoh Output:
// filterProdukPendek(produk)
// ➜ produk dengan nama kayak "HP", "Mouse", dst.

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
  ];
  
  // TODO
  
  const filterProdukPendek = (produk = [], panjangNama = 6) => {
    if (panjangNama > 6) return [];
  
    return produk.filter((prod) => prod.nama.length < panjangNama);
  };
  
  console.log(filterProdukPendek(produk));
  