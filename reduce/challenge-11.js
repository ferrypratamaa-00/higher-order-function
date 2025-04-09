const artikel = [
    { id: 1, judul: "React Dasar", tag: ["javascript", "frontend", "react"] },
    { id: 2, judul: "Tips UI", tag: ["design", "frontend"] },
    { id: 3, judul: "Belajar JS", tag: ["javascript", "dasar"] },
  ];
  
  // Output yang diharapkan:
  // getSemuaTagUnik(artikel) ➜ ["javascript", "frontend", "react", "design", "dasar"]

  const getSemuaTagUnik = (artikel)=>{
    return artikel.reduce((acc, item)=>{
        for(const i of item.tag){
            if(!acc.includes(i)) acc.push(i)
        }
    return acc;
    },[]);
  }

  console.log(getSemuaTagUnik(artikel));