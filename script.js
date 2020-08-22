// Assignment Code
var generateBtn = document.querySelector("#generate");

// PROMPT: "All passwords must be between 8-128 character"

// 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// Function should go here03 Hoomewoord0
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
