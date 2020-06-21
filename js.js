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
              "bblack lives Matters",
              "every time you sselect an image, you get a new help text. insane javascript developer."];


function osl() {
document.getElementById("demo").innerHTML = document.getElementById("img").offsetLeft;
}


function size() {
document.getElementById("demo3").innerHTML = document.getElementById("img").offsetWidth + " " + document.getElementById("img").offsetHeight;
}

function sizew() {
document.getElementById("demo2").innerHTML = document.getElementById("med").offsetWidth + " " + document.getElementById("med").offsetHeight;
}

function centre() {
    var co = document.getElementById("med").offsetWidth * 0.5 - document.getElementById("img").offsetWidth / 2;
    document.getElementById("img").getAttributeNode("style").value = "margin-left: " + co + "px;";
}

function adjust() {
    var size = event.key
    var image = document.getElementById("img");
    
    if(image.offsetWidth != document.getElementById("med").offsetWidth * 0.9 || image.offsetWidth < document.getElementById("med").offsetWidth * 0.9 || image.offsetHeight != document.getElementById("med").offsetHeight * 0.9 || image.offsetHeight < document.getElementById("med").offsetHeight * 0.9) {
    
        if(size == "=" || size == "+") {
        image.getAttributeNode("width").value = image.offsetWidth * 1.05;
        image.getAttributeNode("height").value = image.offsetHeight * 1.05;
        }
    
        if(size == "-" || size == "_") {
        image.getAttributeNode("width").value = image.offsetWidth * 0.952;
        image.getAttributeNode("height").value = image.offsetHeight * 0.952;
        }
    }
}

document.getElementById("marquee").innerHTML = quotes[rnd];
document.getElementById("marquee").getAttributeNode("scrollamount").value = rndSPD;

if(d != null) {
document.getElementById("img").getAttributeNode("src").value = d;
}
    //

