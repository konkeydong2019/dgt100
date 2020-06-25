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
              "meow for me, kitten",
              "runing out of ideas",
              "bing.com",
              "there used to be a funny text here",
              "every time you sselect an image, you get a new help text. insane javascript developer."];

function adjust() {
    var size = event.key
    var image = document.getElementById("img");
    
    if(size == "=" || size == "+") {
        if(image.offsetWidth < document.getElementById("med").offsetWidth * 0.8 && image.offsetHeight < document.getElementById("med").offsetHeight * 0.89  ) {
            image.getAttributeNode("width").value = image.offsetWidth * 1.05;
            image.getAttributeNode("height").value = image.offsetHeight * 1.05;
        }
    }
    
    if(size == "-" || size == "_") {
        if(image.offsetWidth > 200 && image.offsetHeight > 200) {
            image.getAttributeNode("width").value = parseInt(image.offsetWidth) * 0.96;
            image.getAttributeNode("height").value = parseInt(image.offsetHeight) * 0.96;
        }
    }
}

document.getElementById("marquee").innerHTML = quotes[rnd];
document.getElementById("marquee").getAttributeNode("scrollamount").value = rndSPD;

if(d != null) {
document.getElementById("img").getAttributeNode("src").value = d;
}
    //

