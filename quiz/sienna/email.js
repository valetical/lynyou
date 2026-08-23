const form = document.getElementById("email-form");
const sent = document.getElementById("sent");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("from").value,
        message: document.getElementById("message").value
    };

    fetch(
        "https://script.google.com/macros/s/AKfycbwQSs1Qb9sTmltFs6fSZcv4QtVOoz-cW9ech5u_QteSRh8zdD2lkoroyG50bXcJxhUF/exec",
        {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data)
        }
    );

    sent.textContent = "your message was sent!";
    form.reset();
});