const artistlinks = {
  Lunaxis: "https://soundcloud.com/airenn171",
  "Toby Fox": "https://x.com/tobyfox",
  Camellia: "https://cametek.jp",
  "Jane Remover": "https://soundcloud.com/janeremover",
  Milkychan: "https://www.youtube.com/@Milkychan",
  shayz: "https://soundcloud.com/deltarunebrainrot",
  lor: "https://soundcloud.com/lorrific",
  angelvision: "https://soundcloud.com/angelsvision",
  xyy: "https://xyy.fm",
  bennyzer0: "https://soundcloud.com/margolover",
  "Vision Crew": "https://soundcloud.com/dr-fansong-thing",
  lexxiemow: "https://soundcloud.com/lexxiemoww",
  inbetweener: "https://soundcloud.com/inbe7weener",
  Throwaway: "https://soundcloud.com/user454494283",
  "° .✝︎˚∘[• ᴍɪᴋᴇ'ꜱ ʜᴜꜱʙᴀɴᴅ •]° .✝︎˚∘": "https://soundcloud.com/o-o-729209251",
  yuzu: "https://soundcloud.com/yuzuberri",
  lynU: "https://lynyou.com",
  urchin_ltd: "https://x.com/urchin_ltd",
  anothermedian: "https://soundcloud.com/anothermedian",
  "Hatsune Miku": "https://ec.crypton.co.jp/pages/prod/virtualsinger/cv01_us"
};

const releases = [
  /*
  {
    title: "Cutie Mew Mew Magic",
    cover: "https://i1.sndcdn.com/artworks-0Sv4wsobiwy66at3-Zeygzw-t500x500.jpg",
    date: "9/5/26",
    type: "single",
    runtime: "3:09",
    rating: 3,
    credits: [
      "Toby Fox - composer",
      "Camellia - composer",
      "lynU - arranger",
      "yuzu - arranger",
      "Hatsune Miku - vocals",
      "Marnielovesyou - artwork"
    ]
  },
  */
  {
    title: "Flower Man",
    cover: "https://i1.sndcdn.com/artworks-NhvdM6zjJRazQkbm-Pht19w-t500x500.jpg",
    date: "8/14/26",
    type: "remix",
    runtime: "3:21",
    platforms: ["sc", "spt", "apl", "yt"],
    flp: "https://store.lynyou.com/b/7vqlz",
    rating: 3,
    credits: [
      "Toby Fox - composer",
      "Camellia - composer",
      "lynU - arranger",
      "yuzu - arranger",
      "Hayden (Synthesizer V) - vocals",
      "urchin_ltd - artwork"
    ]
  },

  {
    title: "atelier_",
    cover: "https://i1.sndcdn.com/artworks-icbHV0ULg1Hd2BAu-3Niq9w-t500x500.jpg",
    date: "8/7/26",
    type: "remix",
    runtime: "2:24",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["Lunaxis - composer", "yuzu - arranger", "Hatsune Miku - vocals"]
  },

  {
    title: "Aisle",
    cover: "https://i1.sndcdn.com/artworks-bKP896Y7U7sGmIej-DrpiAw-t500x500.jpg",
    date: "7/26/26",
    type: "single",
    runtime: "1:44",
    platforms: ["sc", "yt"],
    rating: 3,
    credits: ["yuzu - composer", "xyy - composer"]
  },

  {
    title: "Synchronization",
    cover: "https://i1.sndcdn.com/artworks-X9JgZsWD27V2wNCr-nDe4EA-t500x500.jpg",
    date: "5/13/26",
    type: "remix",
    runtime: "2:13",
    platforms: ["sc", "yt"],
    rating: 3,
    credits: ["angelvision - composer", "yuzu - arranger", "bennyzer0 - artwork"]
  },

  {
    title: "CORE",
    cover: "https://i1.sndcdn.com/artworks-mWIQxHsrbNVHDL58-JCqQZg-t500x500.jpg",
    date: "5/12/26",
    type: "remix",
    runtime: "2:35",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["Toby Fox - composer", "yuzu - arranger"]
  },

  {
    title: "HYPERDEATH KING // it's up to YOU now!!",
    cover: "https://i1.sndcdn.com/artworks-VFrooEKbpt5Mq0uM-an96dA-t500x500.jpg",
    date: "5/11/26",
    type: "remix",
    runtime: "2:27",
    platforms: ["sc", "yt"],
    rating: 3,
    credits: ["Lunaxis - composer", "Jane Remover - composer", "yuzu - arranger"]
  },

  {
    title: "Nintendo eShop: September 2015 [Arrangement]",
    cover: "https://i1.sndcdn.com/artworks-CgjvxoAfuVbXSF7y-AwAISA-t500x500.png",
    date: "3/3/26",
    type: "remix",
    runtime: "1:46",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["yuzu - arranger"]
  },

  {
    title: "Spirit Raiser",
    cover: "https://i1.sndcdn.com/artworks-5fIGqP3azWMIvABx-bRXDEg-t500x500.jpg",
    date: "2/28/26",
    type: "single",
    runtime: "3:14",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["yuzu - composer", "lor - composer"]
  },

  {
    title: "THIN ICE",
    cover: "https://i1.sndcdn.com/artworks-BJ1T3eS0SVZEBHoJ-G2gb2w-t500x500.jpg",
    date: "1/18/26",
    type: "remix",
    runtime: "2:55",
    platforms: ["sc", "yt"],
    rating: 3,
    credits: [
      "inbetweener - composer",
      "Throwaway - composer",
      "° .✝︎˚∘[• ᴍɪᴋᴇ'ꜱ ʜᴜꜱʙᴀɴᴅ •]° .✝︎˚∘ - composer",
      "yuzu - arranger"
    ]
  },

  {
    title: "knight_finalphase",
    cover: "https://i1.sndcdn.com/artworks-rPzs4473zGLBJvBc-SXsZGA-t500x500.jpg",
    date: "1/16/26",
    type: "single",
    runtime: "1:21",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["Lunaxis - composer", "yuzu - composer"]
  },

  {
    title: "Welcome to the Green Room",
    cover: "https://i1.sndcdn.com/artworks-XjAXVopPHei3QysT-smNcEw-t500x500.jpg",
    date: "1/7/26",
    type: "remix",
    runtime: "1:53",
    platforms: ["sc", "yt"],
    rating: 0,
    credits: ["Toby Fox - composer", "yuzu - arranger"]
  },

  {
    title: "Battle Against a True Hero",
    cover: "https://i1.sndcdn.com/artworks-M8uBwDsjpt90oYGc-7edKZg-t500x500.jpg",
    date: "1/3/26",
    type: "remix",
    runtime: "2:41",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["Toby Fox - composer", "Milkychan - vocals", "yuzu - arranger"]
  },

  {
    title: "Until The End (Battle 3)",
    cover: "https://i1.sndcdn.com/artworks-q5zeK4y4iDymBRQ2-4kQCnA-t500x500.png",
    date: "12/24/25",
    type: "remix",
    runtime: "2:01",
    platforms: ["sc", "yt"],
    rating: 3,
    credits: ["shayz - composer", "yuzu - arranger"]
  },

  {
    title: "Megalo Clamour",
    cover: "https://i1.sndcdn.com/artworks-pBPqLMNJymw9ziyN-Do8oZQ-t500x500.jpg",
    date: "12/20/25",
    type: "remix",
    runtime: "1:47",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["Lunaxis - composer", "yuzu - arranger"]
  },

  {
    title: "ALL TOMORROWS",
    cover: "https://i1.sndcdn.com/artworks-84WVH5huvKE4IpUa-S84A9Q-t500x500.png",
    date: "12/19/25",
    type: "collab",
    runtime: "3:14",
    platforms: ["sc"],
    rating: 1,
    credits: ["anothermedian - composer", "shayz - arranger", "yuzu - drums"]
  },

  {
    title: "TECHNOCOLOR",
    cover: "https://i1.sndcdn.com/artworks-TQGc9yq15zp5ICEn-v7Rr6A-t500x500.jpg",
    date: "12/18/25",
    type: "remix",
    runtime: "2:09",
    platforms: ["sc", "yt"],
    rating: 1,
    credits: ["Vision Crew - composer", "lexxiemow - composer", "yuzu - arranger", "izuvye - artwork"]
  }
];