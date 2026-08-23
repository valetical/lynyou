fetch("https://api.lanyard.rest/v1/users/1012843899255005284")
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        var dot = document.getElementById("dcdot");
        dot.className = data.data.discord_status || "offline";
    });