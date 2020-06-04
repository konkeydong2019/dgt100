var rnd = Math.floor(Math.random() * 10);

var quotes = ["Congratulations to Ryan Lee for watching the entire first season of Game of Thrones in one sitting.",
              "do you seriously have javascript enabled in your browser?",
              "Tip of the day: ",
              "Trivia: this site is made using snippets from stackoverflow","e","f","g","h","i","j"];

document.getElementById("marquee").innerHTML = quotes[rnd];

