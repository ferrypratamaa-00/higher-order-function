// Bikin fungsi yang mengembalikan produk-produk yang namanya mengandung huruf o atau O, contoh: "Laptop", "Monitor".

// 🧾 Output yang Diharapkan:
// [
//   { id: 1, nama: "Laptop", harga: 8000000 },
//   { id: 3, nama: "Mouse", harga: 200000 },
//   { id: 4, nama: "Monitor", harga: 1500000 },
// ]

const produk = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
    { id: 5, nama: "Charger", harga: 500000 },
];

const getProductByChar = (produk, char) =>
    produk.filter((prod) => prod.nama.includes(char));

console.log(getProductByChar(produk, "o"));
