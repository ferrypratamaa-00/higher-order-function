const products = [
    { id: 1, nama: "Laptop", harga: 8000000 },
    { id: 2, nama: "HP", harga: 3000000 },
    { id: 3, nama: "Mouse", harga: 200000 },
    { id: 4, nama: "Monitor", harga: 1500000 },
];

function applyDiscount(products) {
    return products.map((prod) => {
        const hargaDiskon = Math.floor(prod.harga * 0.9);
        return {
            ...prod,
            diskon: "10%",
            hargaDiskon,
        };
    });
}

console.log(applyDiscount(products));

// Output :
// [
//     { id: 1, nama: 'Laptop', harga: 8000000, diskon: '10%', hargaDiskon: 7200000 },
//     { id: 2, nama: 'HP', harga: 3000000, diskon: '10%', hargaDiskon: 2700000 },
//     { id: 3, nama: 'Mouse', harga: 200000, diskon: '10%', hargaDiskon: 180000 }
//   ]

function tandaiHarga(products) {
    return products.map((prod) => {
        let kategori = "";
        if (prod.harga < 500000) kategori = "murah";
        if (prod.harga >= 500000 && prod.harga <= 5000000) kategori = "menegah";
        if (prod.harga > 5000000) kategori = "mahal";

        return {
            ...prod,
            kategori,
        };
    });
}

console.log(tandaiHarga(products));

// Ouput:
// [
//     { id: 1, nama: 'Laptop', harga: 8000000, kategori: 'mahal' },
//     { id: 2, nama: 'HP', harga: 3000000, kategori: 'menengah' },
//     { id: 3, nama: 'Mouse', harga: 200000, kategori: 'murah' }
//   ]

function uppercaseNama(products) {
    return products.map((prod) => {
        return {
            ...prod,
            nama: prod.nama.toUpperCase(),
        };
    });
}

console.log("upperCase : ", uppercaseNama(products));

// Ouput :
// [
//     { id: 1, nama: 'LAPTOP', harga: 8000000 },
//     { id: 2, nama: 'HP', harga: 3000000 },
//     { id: 3, nama: 'MOUSE', harga: 200000 }
//   ]

function hargaSetelahPajak(products) {
    return products.map((prod) => {
        const hargaSetelahPajak = Math.floor(
            prod.harga + (prod.harga * 11) / 100
        );
        return {
            ...prod,
            hargaSetelahPajak,
        };
    });
}

console.log(hargaSetelahPajak(products));

// Output:
// [
//     { id: 1, nama: 'Laptop', harga: 8000000, hargaSetelahPajak: 8880000 },
//     { id: 2, nama: 'HP', harga: 3000000, hargaSetelahPajak: 3330000 },
//     { id: 3, nama: 'Mouse', harga: 200000, hargaSetelahPajak: 222000 }
//   ]

function promoProduct(products) {
    return products.map((prod) => {
        return {
            ...prod,
            promo:
                prod.harga > 5000000
                    ? "Diskon 15%"
                    : prod.harga > 1000000
                    ? "Diskon 10%"
                    : "Diskon 5%",
        };
    });
}

console.log(promoProduct(products));

// Ouput :
// [
//     { id: 1, nama: 'Laptop', harga: 8000000, promo: 'Diskon 15%' },
//     { id: 2, nama: 'HP', harga: 3000000, promo: 'Diskon 10%' },
//     { id: 3, nama: 'Mouse', harga: 200000, promo: 'Diskon 5%' },
//     { id: 4, nama: 'Monitor', harga: 1500000, promo: 'Diskon 10%' },
//   ]
