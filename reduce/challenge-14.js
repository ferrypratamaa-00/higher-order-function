// Diberi data pembelian dari banyak orang, setiap orang bisa belanja lebih dari 1 kali

// ✅ TODO:
// Hitung total belanja tiap pembeli dalam bentuk object.
//Tapi... cuma pembeli yang totalnya di atas 200 ribu yang masuk output.

// {
//      A: 550000,
//      C: 200000 // <— ini gak masuk karena sama dengan 200rb
// }

//   🧠 Petunjuk:
// Lo bisa reduce buat bikin object hasil akhir.
// Di dalamnya lo perlu map atau reduce juga untuk jumlahin total item per transaksi.

const transaksi = [
    { pembeli: "A", items: [{ nama: "Baju", harga: 100000 }, { nama: "Celana", harga: 150000 }] },
    { pembeli: "B", items: [{ nama: "Topi", harga: 50000 }] },
    { pembeli: "A", items: [{ nama: "Sepatu", harga: 300000 }] },
    { pembeli: "C", items: [{ nama: "Kaos", harga: 80000 }, { nama: "Kacamata", harga: 120000 }] },
];

const prosesDataPembeli = (transaksi) =>{

    const data= transaksi.reduce((acc, item)=>{
        if(!acc[item.pembeli]) acc[item.pembeli] = 0;
        acc[item.pembeli] = acc[item.pembeli] + item.items.reduce((sum, produk)=> sum + produk.harga, 0);

        return acc; 
    }, {});

    return Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v > 200_000)
      );
}

console.log(prosesDataPembeli(transaksi));