// Bikin fungsi yang mengembalikan array produk dengan harga di atas 1 juta

//   Output :
//   [
//     { id: 1, nama: "Laptop", harga: 8000000 },
//     { id: 2, nama: "HP", harga: 3000000 },
//     { id: 4, nama: "Monitor", harga: 1500000 },
//   ]

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
];

const filterProdukByPrice = (products) =>
    products.filter((prod) => prod.harga > 1_000_000);

console.log(filterProdukByPrice(produk));
