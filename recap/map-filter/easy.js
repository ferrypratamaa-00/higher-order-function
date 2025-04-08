// 🎯 Ambil nama produk yang harganya di atas 1 juta, lalu ubah jadi huruf besar semua

// 📤 Output:
// ➜ ["LAPTOP", "HP", "MONITOR"]

// ✅ Rules:
// - Gunakan filter() lalu map()
// - Jangan ubah array asli

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
  ];
  
  // TODO: function getNamaProdukMahal(produk)

  const getNamaProdukMahal = (produk)=>{
    return produk.filter((item)=>  item.harga > 1_000_000).map((item)=> {
        return item.nama.toUpperCase();
    })
  }

  console.log(getNamaProdukMahal(produk));