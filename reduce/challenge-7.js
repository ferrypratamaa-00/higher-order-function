// Hitung total durasi semua lagu di playlist

// Contoh Output:
// getTotalDurasi(playlist) ➜ 1035

const playlist = [
    { judul: "Lagu A", durasi: 240 },
    { judul: "Lagu B", durasi: 180 },
    { judul: "Lagu C", durasi: 210 },
    { judul: "Lagu D", durasi: 150 },
    { judul: "Lagu E", durasi: 255 },
  ];
  
  // TODO:
  const getTotalDurasi = (playlist) => {
    // kerjain di sini
    return playlist.reduce((sum, lagu)=> sum + lagu.durasi, 0)
  };
  
  console.log(getTotalDurasi(playlist));
  