// Hitung total like dari semua postingan

// Contoh Output:
// getTotalLike(posts) ➜ 1200

const posts = [
    { id: 1, judul: "Postingan A", like: 300 },
    { id: 2, judul: "Postingan B", like: 150 },
    { id: 3, judul: "Postingan C", like: 400 },
    { id: 4, judul: "Postingan D", like: 350 },
  ];
  
  // TODO:
  const getTotalLike = (posts) => {
    // kerjain di sini
    return posts.reduce((sum, post)=> sum + post.like,0)
  };
  
  console.log(getTotalLike(posts));
  