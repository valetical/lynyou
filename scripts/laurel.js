const home = document.getElementById("home");
const info = document.getElementById("info");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const date = document.getElementById("date");
const runtime = document.getElementById("runtime");
const description = document.getElementById("description");
const tracklisttitle = document.getElementById("tracklisttitle");
const tracks = document.getElementById("tracks");
const streaming = document.getElementById("streaming");
const links = document.getElementById("links");
const credits = document.getElementById("credits");
const music = new Audio();
const artistlinks = {
    lynU: "https://lynyou.com",
    "Alyx Trick": "https://alyxtrick.com",
    "Jane Remover": "https://soundcloud.com/janeremover",
    leroy: "https://soundcloud.com/c0ncernn",
    "Lost Frog Productions": "https://lostfrog.bandcamp.com",
    yu89: "https://soundcloud.com/girlyu89"
};
const streamclasses = {
    soundcloud: "sc",
    spotify: "spt",
    "apple music": "apl",
    bandcamp: "bc"
};

function playMusic() {
    const songs = ["luvedit.mp3", "luvedit2.mp3"];
    music.src = songs[Math.floor(Math.random() * songs.length)];
    music.play();
}

fetch("laurel.json")
    .then((response) => response.json())
    .then((releases) => {
        document.querySelectorAll(".album").forEach((album) => {
            album.onclick = () => {
                location.hash = releases[album.dataset.release].card.url;
            };
        });
        function handleHash() {
            const url = location.hash.slice(1);
            if (!url) {
                gohome();
                return;
            }
            const release = releases.find((release) => release.card.url === url);
            if (release) {
                show(release);
            }
        }
        window.addEventListener("hashchange", handleHash);
        handleHash();
    });

function show(release) {
    const card = release.card;
    cover.src = card.cover;
    title.textContent = card.name;
    date.textContent = card.date;
    runtime.textContent = card.runtime;
    description.textContent = (card.extra || []).join("\n");
    if (card.type === "album" && card.tracklist && card.tracklist.length > 0) {
        tracklisttitle.style.display = "block";
        tracks.style.display = "block";

        tracks.textContent = card.tracklist.map((track, i) => `${i + 1}. ${track.title}`).join("\n");
    } else {
        tracklisttitle.style.display = "none";
        tracks.style.display = "none";
    }

    streaming.innerHTML = card.streaming
        .map((stream) => {
            const className = streamclasses[stream.label] || "";
            return `<a class="${className}" href="${stream.url}" target="_blank">${stream.label}</a>`;
        })
        .join("");

    credits.innerHTML = (card.credits || [])
        .map((line) => {
            Object.entries(artistlinks).forEach(([name, url]) => {
                if (line.includes(name)) {
                    line = line.replaceAll(name, `<a href="${url}" target="_blank">${name}</a>`);
                }
            });

            return line;
        })
        .join("<br>");

    links.style.display = "none";
    home.style.display = "none";
    info.style.display = "block";
}

function gohome() {
    info.style.display = "none";
    home.style.display = "flex";
    links.style.display = "block";
}