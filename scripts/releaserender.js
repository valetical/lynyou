const releaseList = document.getElementById("release-list");

const platformInfo = {
  sc: {
    name: "soundcloud",
    class: "sc"
  },
  spt: {
    name: "spotify",
    class: "spt"
  },
  apl: {
    name: "apple music",
    class: "apl"
  },
  yt: {
    name: "youtube",
    class: "yt"
  },
  bc: {
    name: "bandcamp",
    class: "bc"
  },
  mrx168buy: {
    name: "'MRX-168' purchase",
    url: "https://www.diverse.direct/megarex/mrx-168"
  },
  mrx168info: {
    name: "'MRX-168' info",
    url: "https://www.megarex.info/mrx-168bce"
  },
  twc2026map: {
    name: "osu! beatmap",
    class: "osu",
    url: "https://osu.ppy.sh/beatmapsets/2538002"
  }
};

releases.forEach(function (release) {
  const row = document.createElement("tr");

  let releaseInfo = `
    <span class="releasetitle">${release.title}</span>
  `;

  if (release.tracks) {
    releaseInfo = `
      <details>
        <summary><span class="releasetitle">${release.title}</span></summary>
        <div class="tracklist">
          ${release.tracks
            .map(function (track, index) {
              return `<div>${index + 1}. ${track[0]}<span>${track[1]}</span></div>`;
            })
            .join("")}
        </div>
      </details>
    `;
  }

  let platformhtml = "";

  if (release.platforms) {
    platformhtml = release.platforms
      .map(function (platform) {
        const info = platformInfo[platform];

        if (!info) return "";

        if (info.url) {
          return `
          <div>
            <a href="${info.url}" target="_blank">
              <span class="releaseplatform ${info.class || ""}">${info.name}</span>
            </a>
          </div>
        `;
        }

        return `
        <div>
          <span class="releaseplatform ${info.class || ""}">${info.name}</span>
        </div>
      `;
      })
      .join("");
  }

  function formatDate(dateString) {
    const [month, day, year] = dateString.split("/");

    const date = new Date(2000 + Number(year), Number(month) - 1, Number(day));

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }

  const credits = release.credits
    .map(function (credit) {
      const separator = " - ";
      const parts = credit.split(separator);
      const artist = parts[0];
      const role = parts.slice(1).join(separator);

      if (artistlinks[artist]) {
        return `
        <div class="credits">
          <a href="${artistlinks[artist]}" target="_blank">${artist}</a>${role ? " - " + role : ""}
        </div>
      `;
      }

      return `<div class="credits">${credit}</div>`;
    })
    .join("");

  // flp payhip link
  if (release.flp) {
    platformhtml += `
    <div>
      <a href="${release.flp}" target="_blank" rel="noopener">
        <span class="releaseplatform flp">FLP purchase</span>
      </a>
    </div>
  `;
  }

  row.innerHTML = `
    <td>
      <img src="${release.cover}" class="cover" />
    </td>
    <td>
      ${releaseInfo}
      ${credits}
    </td>
    <td class="date">${formatDate(release.date)}</td>
    <td class="type">${release.type}</td>
    <td class="runtime">${release.runtime}</td>
    <td class="platforms">${platformhtml}</td>
    <td class="rating" data-rating="${release.rating}"></td>
  `;

  releaseList.appendChild(row);
});

document.querySelectorAll(".rating").forEach(function (element) {
  const rating = Number(element.dataset.rating);

  if (rating === 0) {
    element.textContent = "☆☆☆";
  } else {
    element.textContent = "★".repeat(rating) + "☆".repeat(3 - rating);
  }
});