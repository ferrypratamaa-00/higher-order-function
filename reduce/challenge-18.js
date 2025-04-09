// Hitung total stok yang dimiliki setiap supplier, tapi hanya produk dengan stok > 10 yang dihitung

// Contoh Output:
// getTotalStokPerSupplier(data) ➜
// {
//   Indofood: 35,       // Mie Instan (20) + Saus (15)
//   Mayora: 12          // Energen (12) — Beng Beng (5) nggak dihitung
// }

const data = [
    {
        supplier: "Indofood",
        produk: [
            { nama: "Mie Instan", stok: 20 },
            { nama: "Saus", stok: 15 },
        ],
    },
    {
        supplier: "Mayora",
        produk: [
            { nama: "Energen", stok: 12 },
            { nama: "Beng Beng", stok: 5 },
        ],
    },
    {
        supplier: "Indofood",
        produk: [{ nama: "Kerupuk", stok: 8 }],
    },
];

// TODO:
const getTotalStokPerSupplier = (data) => {
    // kerjain di sini

    const totalStok = (produk) => {
        return produk.reduce((sum, produk) => {
            if (produk.stok > 10) sum += produk.stok;
            return sum;
        }, 0);
    };

    return data.reduce((acc, data) => {
        if (!acc[data.supplier]) acc[data.supplier] = 0;
        acc[data.supplier] += totalStok(data.produk);
        return acc;
    }, {});
};

console.log(getTotalStokPerSupplier(data));
