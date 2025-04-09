// Buat ringkasan pembelian berdasarkan jenis produk
// Setiap jenis produk (misal: "elektronik", "fashion", dll)
// harus menampilkan total barang terjual dan total pendapatan

// Contoh Output:
// getRingkasanKategori(transaksi) ➜
/*
{
  elektronik: { totalBarang: 4, totalPendapatan: 12000000 },
  fashion: { totalBarang: 2, totalPendapatan: 400000 }
}
*/

const transaksi = [
    {
        id: 1,
        pembeli: "Aldi",
        items: [
            { nama: "Laptop", harga: 8000000, jenis: "elektronik" },
            { nama: "Kabel", harga: 200000, jenis: "elektronik" },
        ],
    },
    {
        id: 2,
        pembeli: "Budi",
        items: [
            { nama: "Baju", harga: 250000, jenis: "fashion" },
            { nama: "HP", harga: 3000000, jenis: "elektronik" },
        ],
    },
    {
        id: 3,
        pembeli: "Citra",
        items: [
            { nama: "Rok", harga: 150000, jenis: "fashion" },
            { nama: "Mouse", harga: 1000000, jenis: "elektronik" },
        ],
    },
];

// TODO:
const getRingkasanKategori = (transaksi) => {
    // kerjain di sini
    return transaksi.reduce((acc, transaksi) => {
        transaksi.items.forEach((item) => {
            if (!acc[item.jenis]) {
                acc[item.jenis] = {
                    totalBarang: 0,
                    totalPendapatan: 0,
                };
            }
            acc[item.jenis].totalBarang += 1;
            acc[item.jenis].totalPendapatan += item.harga;
        });
        return acc;
    }, {});

    // return data;
};

console.log(getRingkasanKategori(transaksi));
