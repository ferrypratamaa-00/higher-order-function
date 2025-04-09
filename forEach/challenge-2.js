// 🎯 Goal:
// Bikin fungsi getNamaProduk() yang ngumpulin semua nama produk ke dalam array baru.

// 📜 Rules:
// - Gunakan `forEach()`
// - Return array berisi nama-nama produk

// 📦 Contoh Output:
// getNamaProduk(produk) ➜ ["Mie Instan", "Saus", "Kerupuk"]

const produk = [
    { nama: "Mie Instan", supplier: "Indofood" },
    { nama: "Saus", supplier: "Indofood" },
    { nama: "Kerupuk", supplier: "Indofood" },
];

// TODO:
const getNamaProduk = (produk) => {
    // kerjain di sini brooo
    const listProduk = [];
    produk.forEach((element) => {
        listProduk.push(element.nama);
    });
    return listProduk;
};

console.log(getNamaProduk(produk));
