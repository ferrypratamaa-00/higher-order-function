// ✅ Level 1 – Hitung Jumlah Produk per Kategori

// 🎯 Goal:
// Bikin fungsi getJumlahPerKategori() yang ngitung total produk berdasarkan kategori.

// 📜 Rules:
// - Kelompokkan produk berdasarkan `kategori`
// - Hitung jumlah produk per kategori
// - Output berupa object { [kategori]: jumlah }

// 📦 Contoh Output:
// getJumlahPerKategori(produk) ➜
// {
//   Makanan: 3,
//   Bumbu: 1,
//   Minuman: 2
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
const getJumlahPerKategori = (produk) => {
    // kerjain di sini brooo
    return produk.reduce((acc, produk) => {
        if (!acc[produk.kategori]) acc[produk.kategori] = 0;
        acc[produk.kategori] += 1;

        return acc;
    }, {});
};

console.log(getJumlahPerKategori(produk));
