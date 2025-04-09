// Hitung total pembelian setiap kasir, tapi cuma barang dengan harga > 5000 yang dihitung

// Contoh Output:
// getTotalPerKasir(penjualan) ➜
// {
//   Dina: 7000,     // cuma Keripik (7000) yang dihitung, Permen (2000) nggak
//   Eka: 18000      // Susu (10000) + Shampoo (8000)
// }

const penjualan = [
    {
        id: 1,
        kasir: "Dina",
        barang: [
            { nama: "Sabun", harga: 5000 },
            { nama: "Permen", harga: 2000 },
        ],
    },
    {
        id: 2,
        kasir: "Eka",
        barang: [
            { nama: "Susu", harga: 10000 },
            { nama: "Shampoo", harga: 8000 },
        ],
    },
    {
        id: 3,
        kasir: "Dina",
        barang: [{ nama: "Keripik", harga: 7000 }],
    },
];

// TODO:
const getTotalPerKasir = (penjualan) => {
    // kerjain di sini

    const totalHargaBarang = (barang) => {
        return barang.reduce((sum, barang) => {
            if (barang.harga > 5000) sum += barang.harga;
            return sum;
        }, 0);
    };

    return penjualan.reduce((acc, penjualan) => {
        if (!acc[penjualan.kasir]) acc[penjualan.kasir] = 0;

        acc[penjualan.kasir] += totalHargaBarang(penjualan.barang);

        return acc;
    }, {});
};

console.log(getTotalPerKasir(penjualan));
