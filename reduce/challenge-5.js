// Gabungkan semua nama produk jadi 1 string dipisah koma

// Contoh Output:
// getNamaProduk(produk) ➜ "Laptop, HP, Mouse, Monitor, Charger"

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

// TODO:
const getNamaProduk = (produk) => {
    // kerjain di sini
    return produk.reduce((acc, item, index) => {
        return acc + (index !== 0 ? ", " : "") + item.nama;
    }, "")
};

console.log(getNamaProduk(produk));
