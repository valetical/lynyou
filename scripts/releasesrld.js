const artistlinks = {
  lynU: "https://soundcloud.com/lynyou",
  "ellie mills": "https://soundcloud.com/elliemillss"
};

const releases = [
/*
  {
    title: "215",
    cover: "https://i1.sndcdn.com/artworks-FNnCVzWzS7JgxrAe-uUQzSg-t500x500.jpg",
    date: "?",
    type: "single",
    runtime: "?",
    rating: 0,
    credits: ["lynU - production, vocals"]
  },
*/

  {
    title: "Part of town",
    cover: "https://i1.sndcdn.com/artworks-FNnCVzWzS7JgxrAe-uUQzSg-t500x500.jpg",
    date: "7/11/26",
    type: "single",
    runtime: "1:53",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"]
  },

  {
    title: "Adore me",
    cover: "https://i1.sndcdn.com/artworks-FNnCVzWzS7JgxrAe-uUQzSg-t500x500.jpg",
    date: "5/12/26",
    type: "single",
    runtime: "1:44",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 3,
    credits: ["lynU - production, vocals"]
  },

  {
    title: "Porchlight",
    cover: "https://i1.sndcdn.com/artworks-CS58zrzQiJNfo0pM-Rp36cQ-t500x500.jpg",
    date: "1/9/26",
    type: "single",
    runtime: "2:25",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 3,
    credits: ["lynU - production, vocals"]
  },

  {
    title: "Turning point",
    cover: "https://i1.sndcdn.com/artworks-syd5qehbcuwyQFx8-QP7MvQ-t500x500.jpg",
    date: "11/14/25",
    type: "single",
    runtime: "2:26",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 3,
    credits: ["lynU - production, vocals"]
  },
  
                {
    title: "even if it kills me",
    cover: "https://i1.sndcdn.com/artworks-9Hc7S5xJDo4yOLNy-MapNxQ-t500x500.jpg",
    date: "10/21/25",
    type: "single",
    runtime: "2:06",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"],
  },

  {
    title: "Like the last time",
    cover: "https://i1.sndcdn.com/artworks-QyznUlvEwtAegOEP-beBsVg-t500x500.jpg",
    date: "7/15/25",
    type: "single",
    runtime: "2:04",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 1,
    credits: ["lynU - production, vocals"]
  },

  {
    title: "Codependent",
    cover: "https://i1.sndcdn.com/artworks-E8j4ZEIYPYqDktHB-qJ6eAg-t500x500.jpg",
    date: "6/19/25",
    type: "single",
    runtime: "3:00",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 2,
    credits: ["lynU - production, vocals"]
  },

  {
    title: "Running in circles",
    cover: "https://i1.sndcdn.com/artworks-wprioGsXPMgxcaNY-6XtxSQ-t500x500.jpg",
    date: "4/25/25",
    type: "single",
    runtime: "1:34",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"]
  },

  {
    title: "Drafts",
    cover: "https://i1.sndcdn.com/artworks-6S6JjwqeeMSXhytM-jYdycQ-t1080x1080.jpg",
    date: "2/14/25",
    type: "EP",
    runtime: "14:46",
    platforms: ["sc", "spt", "apl", "yt", "bc"],
    rating: 3,
    credits: ["lynU - production, vocals", "ellie mills - additional vocals (track 2)"],
    tracks: [
      ["How to die standing still", "3:20"],
      ["Broke my promise", "2:19"],
      ["All the time", "3:20"],
      ["Learning to love solitude", "3:05"],
      ["Blunt", "2:40"]
    ]
  },

  {
    title: "I",
    cover: "https://i1.sndcdn.com/artworks-WrfpVlY6k8PEEROR-jLijwA-t1080x1080.jpg",
    date: "10/11/24",
    type: "EP",
    runtime: "7:52",
    platforms: ["sc", "spt", "apl", "yt", "bc"],
    rating: 1,
    credits: ["lynU - production, vocals"],
    tracks: [
      ["Bother", "1:23"],
      ["Its Cloudy In Here", "1:36"],
      ["I Was Someone Else", "1:21"],
      ["Daydream", "1:49"],
      ["Arise", "1:41"]
    ]
  },
  
              {
    title: "as far as i know",
    cover: "https://i1.sndcdn.com/artworks-URQu0ZnF4ezVUkke-wUEl5w-t500x500.jpg",
    date: "9/14/24",
    type: "single",
    runtime: "1:32",
    platforms: ["sc"],
    rating: 0,
    credits: ["lynU - production, vocals"],
  },
  
            {
    title: "bittersweet",
    cover: "https://i1.sndcdn.com/artworks-1LCOoPzGYQApJ01x-znX87Q-t500x500.jpg",
    date: "8/6/24",
    type: "single",
    runtime: "1:19",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 3,
    credits: ["lynU - production, vocals"],
  },
  
          {
    title: "crown lake",
    cover: "https://i1.sndcdn.com/artworks-gybUTzU4gyoaJ0gE-9k6yAw-t500x500.jpg",
    date: "5/18/24",
    type: "single",
    runtime: "2:02",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"],
  },
  
        {
    title: "deep cuts",
    cover: "https://i1.sndcdn.com/artworks-W3OF2QnE82kVuaGY-t9mzpw-t500x500.jpg",
    date: "5/1/24",
    type: "single",
    runtime: "1:57",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"],
  },
  
      {
    title: "where did u go",
    cover: "https://i1.sndcdn.com/artworks-FUvuifC53KyhxJ49-iktb4w-t500x500.jpg",
    date: "4/17/24",
    type: "single",
    runtime: "1:53",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"],
  },
  
    {
    title: "watering dead plants",
    cover: "https://i1.sndcdn.com/artworks-gZjGHzzvmpJhBggD-K5dnqw-t500x500.jpg",
    date: "3/15/24",
    type: "EP",
    runtime: "6:28",
    platforms: ["sc", "spt", "apl", "yt"],
    rating: 0,
    credits: ["lynU - production, vocals"],
    tracks: [
      ["parking lot", "1:27"],
      ["midden", "1:31"],
      ["love liar", "2:02"],
      ["drive into a corner", "1:27"],
    ]
  },
  
        {
    title: "my favorite lie",
    cover: "https://i1.sndcdn.com/artworks-jw3uyYGzK5POVd8N-RlPRyQ-t500x500.jpg",
    date: "2/6/24",
    type: "single",
    runtime: "1:13",
    platforms: ["sc"],
    rating: 0,
    credits: ["lynU - production, vocals"],
  },
  
];
