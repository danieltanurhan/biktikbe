var words = ["powerful", "courageous", "amazing",
  "extraordinary", "remarkable", "incredible", "awesome",
  "stunning", "breathtaking", "magnificent", "phenomenal",
  "spectacular", "marvelous", "sensational", "brilliant", "fabulous"];

var wordIndex = 0;

function changePlaceholder() {
  var input = document.getElementById("thought");

  if(input != null) {
    input.placeholder = "Say anything " + words[wordIndex] + "";

    wordIndex++;
  
    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }
  
  console.log("The placeholder.js file is running");
}
// Call the function once to initialize the placeholder text
changePlaceholder();

setInterval(changePlaceholder, 1750);


