const dataPopulares = [
  {
    id: 1,
    nombre: "Howls Moving Castle",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    banner:
      "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2019/08/banner-howls-moving-castle.png?ssl=1",
    descripcion:
      "Sophie, a young milliner and eldest of three sisters, encounters a wizard named Howl on her way to visit her \
      sister Lettie. Upon returning home, she meets the Witch of the Waste, who transforms her into a 90-year-old woman. \
      Seeking to break the curse, Sophie leaves home and sets off through the countryside.",
    rating: 2.5,
    maturity: "PG13",
    category: "movie",
  },
  {
    id: 2,
    nombre: "One Piece",
    imagen: "https://m.media-amazon.com/images/I/816av3JOFCS.jpg",
    banner:
      "https://wallpapers.com/images/featured/one-piece-c0pujiakubq5rwas.jpg",
    descripcion:
      "A legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!",
    rating: 4.5,
    maturity: "TV14",
    category: "Tvseries",
  },
  {
    id: 3,
    nombre: "JoJos Bizzare Adventure",
    imagen:
      "https://cdn.europosters.eu/image/750/posters/jojo-s-bizarre-adventure-group-i67831.jpg",
    banner: "https://images8.alphacoders.com/755/thumb-1920-755323.jpg",
    descripcion:
      "JoJo's Bizarre Adventure tells the story of the Joestar family, a family whose various members discover they are destined to take down supernatural foes using powers that they possess.",
    rating: 2,
    maturity: "R18",
    category: "Tvseries",
  },
  {
    id: 4,
    nombre: "kimetsu no yaiba",
    imagen: "https://es.web.img3.acsta.net/pictures/23/06/20/10/30/2213095.jpg",
    banner:
      "https://wallpapers.com/images/hd/kimetsu-no-yaiba-pictures-ekypmhesa3ghjw9r.jpg",
    descripcion:
      "Kimetsu no Yaiba is a Japanese fantasy manga series and comic book by Koyoharu Gotouge. It follows Tanjiro Kamado, a young boy living in Taisho-era Japan who becomes the sole survivor of his family after demons kill them. He then sets out to save his sister Nezuko who has transformed into a demon.",
    rating: 4,
    maturity: "TV14",
    category: "Tvseries",
  },
  {
    id: 5,
    nombre: "Ponyo",
    imagen:
      "https://image.tmdb.org/t/p/original/thTpW7fiMs5TyFdhnr6uyqLVeVT.jpg",
    banner:
      "https://i.pinimg.com/originals/3f/49/75/3f4975b4c31c35d1b57502d64acb9734.jpg",
    descripcion:
      "A young boy named Sosuke rescues a goldfish named Ponyo, and they embark on a fantastic journey of friendship before Ponyo's father forces her to return to the sea. ",
    rating: 4,
    maturity: "PG13",
    category: "movie",
  },
  //inicio linea 2
  {
    id: 6,
    nombre: "Hearthstopper",
    imagen:
      "https://m.media-amazon.com/images/I/617CNUVUToL._AC_UF894,1000_QL80_.jpg",
    banner:
      "https://images.wallpapersden.com/image/download/netflix-heartstopper-season-1_bWdua2eUmZqaraWkpJRmbmdlrWZlbWU.jpg",
    descripcion:
      "Based on the graphic novels of the same name by series creator Alice Oseman, Heartstopper follows high school sweetie Charlie (Joe Locke), who develops a crush on jock classmate Nick (Kit Connor).",
    rating: 5,
    maturity: "TV14",
    category: "TVseries",
  },
  {
    id: 7,
    nombre: "Spirited away",
    imagen:
      "https://ramenparados.com/wp-content/uploads/2021/05/POSTER_CHIHIRO_2021.jpg",
    banner:
      "https://wallpapers.com/images/featured/spirited-away-glulkohud4k8bubt.jpg",
    descripcion:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
    rating: 4.5,
    maturity: "PG13",
    category: "movie",
  },
  {
    id: 8,
    nombre: "death note",
    imagen:
      "https://cdn.europosters.eu/image/750/death-note-from-the-shadows-i58005.jpg",
    banner:
      "https://wallpapers.com/images/hd/death-note-obata-takeshi-qz191tzfpbgaci18.jpg",
    descripcion:
      "The story follows Light Yagami, a genius high school student who discovers a mysterious notebook: the 'Death Note', which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
    rating: 4.5,
    maturity: "13+",
    category: "tvseries",
  },
  {
    id: 9,
    nombre: "Vinland saga",
    imagen: "https://i.ebayimg.com/images/g/dXoAAOSw~npeb0B6/s-l400.jpg",
    banner:
      "https://wallpapers.com/images/hd/vinland-saga-pictures-dikxzidsazb3dqzm.jpg",
    descripcion:
      "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father an homage.",
    rating: 4,
    maturity: "16+",
    category: "Tvseries",
  },
  {
    id: 10,
    nombre: "Romantic Killer",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BOTRiYWQ2ZDktYjVlOS00OTIyLTk0Y2EtZmNkYzNkNjRkNzlhXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    banner: "https://wallpapercave.com/wp/wp11683520.jpg",
    descripcion:
      "Living her best single life, romance is the last thing on Anzu's mind, until a tiny matchmaking wizard suddenly turns her life into a clichéd rom-com.",
    rating: 4.5,
    maturity: "13+",
    category: "TVseries",
  },
];

const dataRecomndados = [
  {
    id: 1,
    nombre: "Howls Moving Castle2",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    banner:
      "https://i0.wp.com/beneaththetangles.com/wp-content/uploads/2019/08/banner-howls-moving-castle.png?ssl=1",
    descripcion:
      "Sophie, a young milliner and eldest of three sisters, encounters a wizard named Howl on her way to visit her \
      sister Lettie. Upon returning home, she meets the Witch of the Waste, who transforms her into a 90-year-old woman. \
      Seeking to break the curse, Sophie leaves home and sets off through the countryside.",
    rating: 2.5,
    maturity: "PG13",
    category: "movie",
  },
  {
    id: 2,
    nombre: "One Piece2",
    imagen: "https://m.media-amazon.com/images/I/816av3JOFCS.jpg",
    banner:
      "https://wallpapers.com/images/featured/one-piece-c0pujiakubq5rwas.jpg",
    descripcion:
      "A legendary high-seas quest unlike any other. Luffy is a young adventurer who has longed for a life of freedom ever since he can remember. He sets off from his small village on a perilous journey to find the legendary fabled treasure, ONE PIECE, to become King of the Pirates!",
    rating: 4.5,
    maturity: "TV14",
    category: "Tvseries",
  },
  {
    id: 3,
    nombre: "JoJos Bizzare Adventure2",
    imagen:
      "https://cdn.europosters.eu/image/750/posters/jojo-s-bizarre-adventure-group-i67831.jpg",
    banner: "https://images8.alphacoders.com/755/thumb-1920-755323.jpg",
    descripcion:
      "JoJo's Bizarre Adventure tells the story of the Joestar family, a family whose various members discover they are destined to take down supernatural foes using powers that they possess.",
    rating: 2,
    maturity: "R18",
    category: "Tvseries",
  },
  {
    id: 4,
    nombre: "kimetsu no yaiba",
    imagen: "https://es.web.img3.acsta.net/pictures/23/06/20/10/30/2213095.jpg",
    banner:
      "https://wallpapers.com/images/hd/kimetsu-no-yaiba-pictures-ekypmhesa3ghjw9r.jpg",
    descripcion:
      "Kimetsu no Yaiba is a Japanese fantasy manga series and comic book by Koyoharu Gotouge. It follows Tanjiro Kamado, a young boy living in Taisho-era Japan who becomes the sole survivor of his family after demons kill them. He then sets out to save his sister Nezuko who has transformed into a demon.",
    rating: 4,
    maturity: "TV14",
    category: "Tvseries",
  },
  {
    id: 5,
    nombre: "Ponyo",
    imagen:
      "https://image.tmdb.org/t/p/original/thTpW7fiMs5TyFdhnr6uyqLVeVT.jpg",
    banner:
      "https://i.pinimg.com/originals/3f/49/75/3f4975b4c31c35d1b57502d64acb9734.jpg",
    descripcion:
      "A young boy named Sosuke rescues a goldfish named Ponyo, and they embark on a fantastic journey of friendship before Ponyo's father forces her to return to the sea. ",
    rating: 4,
    maturity: "PG13",
    category: "movie",
  },
  //inicio linea 2
  {
    id: 6,
    nombre: "Hearthstopper",
    imagen:
      "https://m.media-amazon.com/images/I/617CNUVUToL._AC_UF894,1000_QL80_.jpg",
    banner:
      "https://images.wallpapersden.com/image/download/netflix-heartstopper-season-1_bWdua2eUmZqaraWkpJRmbmdlrWZlbWU.jpg",
    descripcion:
      "Based on the graphic novels of the same name by series creator Alice Oseman, Heartstopper follows high school sweetie Charlie (Joe Locke), who develops a crush on jock classmate Nick (Kit Connor).",
    rating: 5,
    maturity: "TV14",
    category: "TVseries",
  },
  {
    id: 7,
    nombre: "Spirited away",
    imagen:
      "https://ramenparados.com/wp-content/uploads/2021/05/POSTER_CHIHIRO_2021.jpg",
    banner:
      "https://wallpapers.com/images/featured/spirited-away-glulkohud4k8bubt.jpg",
    descripcion:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.",
    rating: 4.5,
    maturity: "PG13",
    category: "movie",
  },
  {
    id: 8,
    nombre: "death note",
    imagen:
      "https://cdn.europosters.eu/image/750/death-note-from-the-shadows-i58005.jpg",
    banner:
      "https://wallpapers.com/images/hd/death-note-obata-takeshi-qz191tzfpbgaci18.jpg",
    descripcion:
      "The story follows Light Yagami, a genius high school student who discovers a mysterious notebook: the 'Death Note', which belonged to the shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
    rating: 4.5,
    maturity: "13+",
    category: "tvseries",
  },
  {
    id: 9,
    nombre: "Vinland saga",
    imagen: "https://i.ebayimg.com/images/g/dXoAAOSw~npeb0B6/s-l400.jpg",
    banner:
      "https://wallpapers.com/images/hd/vinland-saga-pictures-dikxzidsazb3dqzm.jpg",
    descripcion:
      "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father an homage.",
    rating: 4,
    maturity: "16+",
    category: "Tvseries",
  },
  {
    id: 10,
    nombre: "Romantic Killer",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BOTRiYWQ2ZDktYjVlOS00OTIyLTk0Y2EtZmNkYzNkNjRkNzlhXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_.jpg",
    banner: "https://wallpapercave.com/wp/wp11683520.jpg",
    descripcion:
      "Living her best single life, romance is the last thing on Anzu's mind, until a tiny matchmaking wizard suddenly turns her life into a clichéd rom-com.",
    rating: 4.5,
    maturity: "13+",
    category: "TVseries",
  },
];
