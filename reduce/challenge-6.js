// Bikin object jumlah produk berdasarkan kategori harga
// "mahal" (>5jt), "menengah" (500rb–5jt), "murah" (<500rb)

// Output:
// getRingkasanProduk(produk) ➜ { mahal: 1, menengah: 3, murah: 1 }

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
  ];
  
  // TODO:
  const getRingkasanProduk = (produk) => {
    // kerjain di sini
    return produk.reduce((acc, item)=>{
        let kategori = "";

    if (item.harga > 5_000_000) kategori = "mahal";
    else if (item.harga < 500_000) kategori = "murah";
    else kategori = "menengah";

    if(!acc[kategori]) acc[kategori] = 0;
    acc[kategori] += 1;

    return acc;
    }, {})
  };
  
  console.log(getRingkasanProduk(produk));
  