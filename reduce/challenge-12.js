const produk = [
    { nama: "TWS", rating: 4.5 },
    { nama: "Charger", rating: 4.1 },
    { nama: "Kabel", rating: 3.9 },
    { nama: "Case", rating: 4.3 },
  ];
  
  // Output yang diharapkan:
  // getRataRataRating(produk) ➜ 4.2

  const getRataRataRating = (produk)=> produk.reduce((acc, item)=> acc += item.rating, 0) / produk.length;

  console.log(getRataRataRating(produk));