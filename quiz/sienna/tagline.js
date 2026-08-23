fetch("thisissuchastupididea.json")
    .then(function (r) {
        return r.json();
    })
    .then(function (data) {
        const messages = data.messages;
        document.getElementById("welcome").textContent = messages[Math.floor(Math.random() * messages.length)];
    });