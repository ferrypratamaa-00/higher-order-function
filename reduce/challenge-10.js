// Hitung jumlah semua huruf dari judul buku (tanpa spasi)
// Output:
// getTotalHuruf(buku) ➜ 31

const buku = [
    { id: 1, judul: "Belajar Javascript" },
    { id: 2, judul: "Ngoding Asik" },
    { id: 3, judul: "Tips Developer" },
  ];
  
  // TODO:
  const getTotalHuruf = (buku) => buku.reduce((acc, book)=> acc + book.judul.replace(" ", "").length, 0);
  
  console.log(getTotalHuruf(buku));
  