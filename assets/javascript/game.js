//My array of words/characters obviously
var myArray = ["aang", "batman", "bishop", "cable", "cloud", "cyclops", "deadpool", "doomsday", "flash", "goku", "hasirama", "hulk", "ironman", "itachi", "jiraiya", "joker", "kakashi", "ken", "loki", "magneto", "minato", "naruto", "phoenix", "presence", "ryu", "saitama", "scorpion", "shazam", "subzero", "superman", "thanos", "thor", "tobirama", "vegeta", "wolverine", "wonderwoman", "xavier"];
console.log(myArray);

// Fetch random character names for myArray
var randomCharacter = myArray[Math.floor(Math.random() * myArray.length)];
console.log(randomCharacter);

// Making buttons with JS [A][B][C]

var html = '';
var c;
for (var i = 65; 90 >= i; i++) {            // A-65, Z-90
    c = String.fromCharCode(i);
    html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('buttonLetters').innerHTML = html;
//
var remainLetters = randomCharacter.length;

//Print the asterisk in the innner html in place of printToplayer
var asteriskHeroToGuess = [];
for (var i = 0; i < randomCharacter.length; i++) {
    asteriskHeroToGuess[i] = "*";

}

    //Show progress here
    var swap = document.getElementById("printToPlayer");

    swap.innerHTML = asteriskHeroToGuess.join(" ");

var setLetter = function (letterGuessed) {
    console.log("******Function Starting - setLetter ******")
    var x = letterGuessed.toLowerCase();
    console.log(document.getElementById('alphabet'));
    document.getElementById('alphabet').innerHTML += x;
    console.log(x);
    console.log("remainLetters", remainLetters);

    /// document.getElementById('printToPlayer').innerHTML += x;
    //Guess letter with keyboard here
    for (var j = 0; j < randomCharacter.length; j++) {
        

         // Check here to see if user's guess match letters in random word generated
         
        if (randomCharacter[j] == x) {
            console.log("Hey Im correct");

            //Since the letter is the same, then replace the value of * by x
            
            asteriskHeroToGuess[j] = x;

            //Now you can tell the inner HTML the new value of asterix 
            swap.innerHTML = asteriskHeroToGuess.join(" ");
            remainLetters--;
            
        } else {
            // If user guess did not match, else statement is suppose to call function healthBar
            healthBar();
           
            //Now insert a function to find the letter in your original Array buttonLetters and remove it
        } if (remainLetters == 0) {
            printToPlayer.innerHTML = "Congrats, you've won!";

        }
    }
}

    function healthBar() {

        var remTries = remainLetters;
        console.log(remTries);
    
        for (var j = -1; j < remTries; j++) {
    
    
          if (remTries === 5) {
            //healthBar();
            numTries.innerHTML = remTries;
    
          } else if (remTries === 4) {
            //healthBar();
            numTries.innerHTML = remTries;
    
          } else if (remTries === 3) {
            //healthBar();
            numTries.innerHTML = remTries;
    
          } else if (remTries === 2) {
            //healthBar();
            numTries.innerHTML = remTries;
    
          } else if (remTries === 1) {
            //healthBar();
            numTries.innerHTML = remTries;
    
          } else if (remTries === 0) {
            //healthBar();
            printToPlayer.innerHTML = "You have lost!";
    
          }
        }         
      
        console.log("******Function Ending - Exit******")

    };


//var heroToGuess = myArray[randomCharacter];

// Filling up space with "-"
    //heroToGuess = heroToGuess.replace(/\s/g, "-");
    //console.log(heroToGuess);


// Image of heroes here
