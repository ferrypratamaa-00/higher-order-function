// Hitung total harga semua produk di array

// Contoh Output:
// getTotalHarga(produk) ➜ 13_000_000

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
  ];
  
  // TODO:
  const getTotalHarga = (produk) => {
    // kerjain di sini
    return produk.reduce((sum,item)=>sum + item.harga,0)
  };
  
  console.log(getTotalHarga(produk));
  