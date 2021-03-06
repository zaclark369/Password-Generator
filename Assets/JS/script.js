
const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const charactersSpecial = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
];

var choices = [lowerCaseLetters, upperCaseLetter, numbers, charactersSpecial];
// select choices
function selectChoice() {
 var characters = [];
  // while in the array less than the total of the array, run for loop
  // while (characters.length < 1) {
  // for each instance of the array until we hit the end of the array, ask would you like anything in the choices array in your password. Confirm OK for yes, cancel for no.
  for (var i = 0; i < choices.length; i++) {
    var userPrompt = confirm(`Use ${choices[i]} in your password?`);
    if (userPrompt) {
      characters = characters.concat(choices[i]);
      console.log("insideIfStatement");
      console.log(characters);
      // for (var j = 0; j < characters.length; j++) {
      //   characters.push(choices[i][j]);
      // }
    }
  }
  // if (characters.length = 0) {
  //   alert("Please select characters to procede.");
  //   selectChoice();
  // }
  console.log(characters);
   return characters;
}


// select password length
function pwLength() {
  var passLength = parseInt(
    prompt(
      "How long would you like your password? We can take 8-128 characters."
    )
  );
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Please select a number between 8-128"));
  }
  return passLength;
}

function generatePassword() {
  var length = pwLength();
  console.log(length);
  var possCharacters = selectChoice();
  console.log(possCharacters);
  var generatedpassword = [];
  for (var i = 0; i < length; i++) {
    generatedpassword.push(possCharacters[Math.floor(Math.random() * (possCharacters.length) )]);
  }
  return generatedpassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// this is a test
