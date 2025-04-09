// ✅ Level 3 – Dapetin Top Supplier Berdasarkan Jumlah Produk

// 🎯 Goal:
// Bikin fungsi getTopSupplier(produk) buat nyari supplier dengan jumlah produk terbanyak.

// 📜 Rules:
// - Hitung total produk dari masing-masing supplier
// - Ambil supplier dengan jumlah produk terbanyak
// - Kalau ada yang jumlahnya sama, ambil yang muncul lebih dulu di array
// - Output berupa object { nama: supplier, total: jumlah }

// 📦 Contoh Output:
// getTopSupplier(produk) ➜
// {
//   nama: "Indofood",
//   total: 3
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
const getTopSupplier = (produk) => {
    // kerjain di sini brooo
    const supplier = produk.reduce((acc, produk) => {
        const { supplier } = produk;
        acc[supplier] = (acc[supplier] || 0) + 1;

        return acc;
    }, {});
    return Object.entries(supplier).reduce(
        (toptier, [nama, total]) => {
            return total > toptier.total ? { nama, total } : toptier;
        },
        { nama: "", total: 0 }
    );
};

console.log(getTopSupplier(produk));
