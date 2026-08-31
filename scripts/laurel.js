const home = document.getElementById("home");
const info = document.getElementById("info");
const links = document.getElementById("links");
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
    .then((r) => r.json())
    .then((releases) => {
        document.querySelectorAll(".album").forEach((album) => {
            album.onclick = () => {
                location.hash = releases[album.dataset.release].card.url;
            };
        });
        function handleHash() {
            const url = location.hash.slice(1);
            const release = releases.find((r) => r.card.url === url);
            release ? show(release) : gohome();
        }
    
        window.addEventListener("hashchange", handleHash);
        handleHash();
    });

function show({ card }) {
    document.getElementById("cover").src = card.cover;
    document.getElementById("title").textContent = card.name;
    document.getElementById("date").textContent = card.date;
    document.getElementById("runtime").textContent = card.runtime;
    document.getElementById("description").textContent = (card.extra || []).join("\n");

    const tracks = document.getElementById("tracks");
    const tracklisttitle = document.getElementById("tracklisttitle");

    if (card.type === "album" && card.tracklist?.length) {
        tracklisttitle.style.display = "block";
        tracks.style.display = "block";
        tracks.textContent = card.tracklist.map((track, i) => `${i + 1}. ${track.title}`).join("\n");
    } else {
        tracklisttitle.style.display = "none";
        tracks.style.display = "none";
    }

    document.getElementById("streaming").innerHTML = card.streaming
        .map(
            (stream) =>
                `<a class="${streamclasses[stream.label] || ""}" href="${stream.url}" target="_blank">${stream.label}</a>`
        )
        .join("");

    document.getElementById("credits").innerHTML = (card.credits || [])
        .map((line) => {
            for (const [name, url] of Object.entries(artistlinks)) {
                line = line.replaceAll(name, `<a href="${url}" target="_blank">${name}</a>`);
            }
            return line;
        })
        .join("<br>");

    home.style.display = "none";
    links.style.display = "none";
    info.style.display = "block";
}

function gohome() {
    home.style.display = "flex";
    links.style.display = "block";
    info.style.display = "none";
}