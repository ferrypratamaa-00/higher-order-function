const transaksi = [
    { nama: "Mouse", kategori: "elektronik", harga: 150000 },
    { nama: "Baju", kategori: "fashion", harga: 200000 },
    { nama: "Headset", kategori: "elektronik", harga: 250000 },
    { nama: "Celana", kategori: "fashion", harga: 175000 },
    { nama: "Kabel", kategori: "elektronik", harga: 100000 },
];

// Output yang diharapkan:
// getTransaksiPerKategori(transaksi) ➜ { elektronik: 500000, fashion: 375000 }

const getTransaksiPerKategori = (transaksi) => {
    return transaksi.reduce((acc, item) => {

        if (!acc[item.kategori]) acc[item.kategori] = 0;
        acc[item.kategori] += item.harga;
        return acc;
    }, {})
}

console.log(getTransaksiPerKategori(transaksi));