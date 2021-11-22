// Assignment code here
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

const lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const charactersSpecial = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '='];

var choices = [
  lowerCaseLetters, upperCaseLetter, numbers, charactersSpecial
];

// select choices
function selectChoice() {
  var characters = [];
  while (characters.length < 1) {
    for (var i = 0; i < characters.length; i++) {
      var userPrompt = confirm('Use ${choices}[i] in your password?');
      if (userPrompt) {
        for (var j = 0; j < characters.length; j++) {
          characters.push(choices[i][j]);
        }
      }
    }
    if (characters.length < 1) {
      alert('Please select characters to procede.');
    }
  }
  return characters;
}

function pwLength() {
  var passLength = parseInt(
    prompt('How long would you like your password? We can take 8-128 characters.')
  );
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt('Please select a number between 8-128'));
  }
  return passLength;
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