const queryString = window.location.search; // save the value of dir as a constant
console.log(queryString); //log the value of dir in the console
const d = new URLSearchParams(queryString).get('dir') // get the values of the parameters of dir
var image = document.getElementById("img");
var rnd = Math.floor(Math.random() * 10); // generate a random number to choose a quote
var rndSPD = Math.floor(Math.random() * 80); // generate a random number to determine the speed of the marquee
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

// function for adjusting the size of the image when - or + is pressed
function adjust() {
    var size = event.key
    
    if(size == "=" || size == "+") {
        if(image.offsetWidth < document.getElementById("med").offsetWidth * 0.8 && image.offsetHeight < document.getElementById("med").offsetHeight * 0.89  ) {
            image.getAttributeNode("width").value = image.offsetWidth * 1.05;
            image.getAttributeNode("height").value = image.offsetHeight * 1.05;
        }
    }
    
    if(size == "-" || size == "_") {
        if(image.offsetWidth >= 150 && image.offsetHeight >= 150) {
            image.getAttributeNode("width").value = parseInt(image.offsetWidth) * 0.96;
            image.getAttributeNode("height").value = parseInt(image.offsetHeight) * 0.96;
        }
    }
}

// set the help text and marquee's speed using the random numbers
document.getElementById("marquee").innerHTML = quotes[rnd];
document.getElementById("marquee").getAttributeNode("scrollamount").value = rndSPD;


// substitute the value of dir into the src attribute of the img tag when present
if(d != null) {
    document.getElementById("img").getAttributeNode("src").value = d;
}
    //

