// Hitung total belanja masing-masing pembeli dalam bentuk object
// Output:
// getTotalBelanja(transaksi) ➜ { Andi: 25000, Budi: 10000, Cici: 15000 }

const transaksi = [
    { pembeli: "Andi", item: "Roti", harga: 10000 },
    { pembeli: "Budi", item: "Susu", harga: 10000 },
    { pembeli: "Andi", item: "Teh", harga: 15000 },
    { pembeli: "Cici", item: "Kopi", harga: 15000 },
  ];
  
  // TODO:
  const getTotalBelanja = (transaksi) => {
    // kerjain di sini
    return transaksi.reduce((acc, trans)=> {
        if(!acc[trans.pembeli]) acc[trans.pembeli] = 0,
        acc[trans.pembeli] += trans.harga;

        return acc;
    }, {});
  };
  
  console.log(getTotalBelanja(transaksi));
  