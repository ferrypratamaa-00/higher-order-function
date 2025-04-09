const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

// TODO: Gunakan reduce untuk menghasilkan object seperti ini:
const transformProduk = (produk) => {
    // kerjain di sini
    return produk.reduce((acc, item) => {
        acc.byId[item.id] = item;

        let kategori = "";
        if (item.harga > 5_000_000) kategori = "mahal";
        else if (item.harga < 500_000) kategori = "murah";
        else kategori = "menengah";
      
        acc.totalHarga[kategori] += item.harga;


        return acc;
    }, {
        byId: {},
        totalHarga: {
            mahal: 0,
            menengah: 0,
            murah: 0
        }
    })
};

console.log(transformProduk(produk));
/* Output:
{
  byId: {
    1: { id: 1, nama: 'Laptop', harga: 8000000 },
    2: { id: 2, nama: 'HP', harga: 3000000 },
    ...
  },
  totalHarga: {
    mahal: 8000000,
    menengah: 5000000,
    murah: 200000
  }
}
*/
