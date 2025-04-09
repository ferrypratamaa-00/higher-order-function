// Hitung total barang & total penjualan berdasarkan kategori barang

// Contoh Output:
// getRingkasanPenjualan(penjualan) ➜
// {
//   makanan: { totalBarang: 3, totalPenjualan: 19000 },
//   kebutuhan: { totalBarang: 2, totalPenjualan: 13000 }
// }

const penjualan = [
    {
        id: 1,
        kasir: "Dina",
        barang: [
            { nama: "Sabun", harga: 5000, kategori: "kebutuhan" },
            { nama: "Permen", harga: 2000, kategori: "makanan" },
        ],
    },
    {
        id: 2,
        kasir: "Eka",
        barang: [
            { nama: "Susu", harga: 10000, kategori: "makanan" },
            { nama: "Shampoo", harga: 8000, kategori: "kebutuhan" },
        ],
    },
    {
        id: 3,
        kasir: "Dina",
        barang: [{ nama: "Keripik", harga: 7000, kategori: "makanan" }],
    },
];

// TODO:
const getRingkasanPenjualan = (penjualan) => {
    return penjualan.reduce((acc, penjualan) => {
        penjualan.barang.forEach((item) => {
            if (!acc[item.kategori]) {
                acc[item.kategori] = {
                    totalBarang: 0,
                    totalPendapatan: 0,
                };
            }
            acc[item.kategori].totalBarang += 1;
            acc[item.kategori].totalPendapatan += item.harga;
        });
        return acc;
    }, {});
};

console.log(getRingkasanPenjualan(penjualan));
