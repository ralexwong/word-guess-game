// variables and arrays
var underscore = [];
var rightletter = [];
var wrongletter = [];
var winscounter = 0;
var guessesleft = 12;
 

var wordbank = ["skrillex", "alesso", "odesza","yellowclaw","diplo","flume","tiesto","illenium","zedd","kaskade","kygo","chainsmokers","slander","griz","galantis"];


// Randomly chooses a choice from the letterBank array. This is the Computer's guess.
computerguess = wordbank[Math.floor(Math.random() * wordbank.length)];

// create underscores based on the words length
function underscoreReplace() {
    for (i = 0; i < computerguess.length; i++) {
        underscore.push("_ ");
    }
    return underscore;
}

console.log(computerguess);


// get the users guess
// goes through lose function then right letter function
document.onkeyup = function(event) {
    var userguess = event.key.toLowerCase();
    compareGuesses(userguess);
}

// check if guess is right
// checks when the length of the computers word and sum of the right letters are the same
// resets round when the win has been achieved

// tells user if the letter they chose has already been chosen
function compareGuesses(userguess) {
    if (rightletter.includes(userguess) || (wrongletter.includes(userguess))) {
        alert("You already chose that letter :o");
    }

    for (i = 0; i < computerguess.length; i++) {
        if (computerguess[i] === userguess) {
            underscore[i] = userguess;
        }
    }

    if (computerguess.indexOf(userguess) == -1) 
    guessesleft--;
    document.getElementById("guessesleft").innerHTML = guessesleft;
    wrongletter.push(userguess);
    wrongletter.innerHTML = underscore.join('');
    document.getElementById("wrongletter").innerHTML = wrongletter;
    if (guessesleft < 1) {
        alert("You lost :(");
        resetRound();
    }

    if (underscore.join('') == computerguess ) {   
        winscounter++
        document.getElementById("winscounter").innerHTML = winscounter;
        alert("you win :)");
        resetRound();
    }

    // joins the letters and underscores shown to the user
    document.getElementById("hangmanword").innerHTML = underscore.join('');
}

// resets round by setting guesses to 12, resets right and wrongletter arrays
// updates wincounter
// computer selects a random word from wordbank
// underscoreReplace goes through

function resetRound() {

    guessesleft = 12;
    rightletter = [];
    wrongletter = [];
    underscore = [];
    
    document.getElementById("hangmanword").innerHTML = "";
    document.getElementById("winscounter").innerHTML = winscounter;
    document.getElementById("wrongletter").innerHTML = wrongletter;
    document.getElementById("guessesleft").innerHTML = guessesleft;

    computerguess = wordbank[Math.floor(Math.random() * wordbank.length)];
    underscoreReplace();
    console.log(computerguess);
}

// starts the first round

window.onload = function() { 
    underscoreReplace();
    document.getElementById("guessesleft").innerHTML = guessesleft;
    document.getElementById("hangmanword").innerHTML = underscore.join('');
}