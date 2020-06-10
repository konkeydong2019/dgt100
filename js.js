const queryString = window.location.search;
console.log(queryString);
const d = new URLSearchParams(queryString).get('dir')
var rnd = Math.floor(Math.random() * 10);
var rndSPD = Math.floor(Math.random() * 80);
var quotes = ["Congratulations to Ryan Lee for watching the entire first season of Game of Thrones in one sitting.",
              "do you seriously have javascript enabled in your browser?",
              "Tip of the day: ",
              "Trivia: this site is made using snippets from stackoverflow",
              "god save the queen",
              "kia ora, whanau",
              "runing out of ideas",
              "bing.com",
              "bblack lives Matters",
              "every time you sselect an image, you get a new help text. insane javascript developer."];

document.getElementById("marquee").innerHTML = quotes[rnd];
document.getElementById("marquee").getAttributeNode("scrollamount").value = rndSPD;

if(d != null) {
document.getElementById("img").getAttributeNode("src").value = d;
}
    //

