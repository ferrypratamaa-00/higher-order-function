// ✅ Level 2 – Total Produk per Supplier & Kategori

// 🎯 Goal:
// Bikin fungsi getJumlahPerSupplierDanKategori() yang ngelompokkan data produk
// berdasarkan `supplier`, lalu hitung jumlah produk per `kategori` di dalamnya.

// 📜 Rules:
// - Kelompokkan dulu berdasarkan supplier
// - Di dalamnya, kelompokkan lagi berdasarkan kategori
// - Output berupa nested object:
//   { [supplier]: { [kategori]: jumlah } }

// 📦 Contoh Output:
// getJumlahPerSupplierDanKategori(produk) ➜
// {
//   Indofood: {
//     Makanan: 2,
//     Bumbu: 1
//   },
//   Mayora: {
//     Minuman: 2,
//     Makanan: 1
//   }
// }

const produk = [
    { nama: "Mie Instan", supplier: "Indofood", kategori: "Makanan" },
    { nama: "Saus", supplier: "Indofood", kategori: "Bumbu" },
    { nama: "Kerupuk", supplier: "Indofood", kategori: "Makanan" },
    { nama: "Energen", supplier: "Mayora", kategori: "Minuman" },
    { nama: "Beng Beng", supplier: "Mayora", kategori: "Makanan" },
    { nama: "Teh Pucuk", supplier: "Mayora", kategori: "Minuman" },
];

// TODO:
const getJumlahPerSupplierDanKategori = (produk) => {
    // kerjain di sini brooo
    return produk.reduce((acc, produk) => {
        const { nama, supplier, kategori } = produk;
        if (!acc[supplier]) acc[supplier] = {};
        if (!acc[supplier][kategori]) acc[supplier][kategori] = 0;
        acc[supplier][kategori] += 1;

        return acc;
    }, {});
};

console.log(getJumlahPerSupplierDanKategori(produk));
