let rows = ["You are amazing ❤️", "You’re always enough.", "You make me smile.", "You’re wonderful.", "Stay magical ✨", "You’re so loved.", "You light up my day.", "Never stop shining.", "You’re pure sunshine.", "I’m so proud of you."];
const cloud = document.getElementById("cloud");
const button = document.getElementById("button-water");
const message = document.getElementById("message");

button.addEventListener("click", function (event) {
    cloud.style.display = "block";
    const randomIndex = Math.floor(Math.random() * rows.length);
    const text = rows[randomIndex];
    message.textContent = text;
    setTimeout(function () {
        cloud.style.display = "none";
        message.textContent = "";
    }, 5000);

})