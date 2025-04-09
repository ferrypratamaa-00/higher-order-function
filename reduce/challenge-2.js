const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

// Kategori:
// - mahal: > 5.000.000
// - menengah: 500.000 - 5.000.000
// - murah: < 500.000

// TODO: Gunakan reduce untuk mengelompokkan produk ke dalam kategori
const groupProdukByKategori = (produk) => {
    // kerjain di sini
    return produk.reduce((acc, item) => {
        let kategori = "";

        if (item.harga > 5_000_000) kategori = "mahal";
        else if (item.harga >= 500_000) kategori = "menengah";
        else kategori = "murah";

        if (!acc[kategori]) acc[kategori] = [];
        acc[kategori].push(item);

        return acc;
    }, {})
};

console.log(groupProdukByKategori(produk));
/* Output:
{
  mahal: [ { id: 1, nama: 'Laptop', harga: 8000000 } ],
  menengah: [ { id: 2, ... }, { id: 4, ... }, { id: 5, ... } ],
  murah: [ { id: 3, ... } ]
}
*/
