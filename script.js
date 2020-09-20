// Assignment Code
var generateBtn = document.querySelector("#generate"); 

//Character Designation
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
var lowerCaseChars= "abcdefghijklmnopqrstuvwxyz";
var spec = "!@#$%^&*()-=_+;:[{]}";
var numberChars = "0123456789";
var specialChars = spec.split("");

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var values = "";
var password = "";

// Function should go here03 Hoomewoord0
function generatePassword() {
  var numberOfCharacters = parseInt(prompt("Please choose a length of a passward between 8 and 128"));

  
  var useUpperCase = confirm("Please confirm the use of uppercase letters?");
  var useLowerCase = confirm("Please confirm the use of lowercase letters?");
  var useNumbers = confirm("Please confrim the use of numbers?"); 
  var useSpecial = confirm("Please confrim the use of special chararcters?");
  
  if (useLowerCase) {
    values = values.concat(lowerCaseChars);
  }
  if(useUpperCase) {
    values = values.concat(upperCaseChars);
  }

  if(useNumbers) {
    values = values.concat(numberChars);
  }
  if(useSpecial) {
     values = values.concat(specialChars);
  }

  var possibleCharactersLength = values.length;

  console.log(possibleCharactersLength);

  for (var i = 0; i < numberOfCharacters; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharactersLength);
    var randomValue = values.charAt(randomNumber);
    password = password.concat(randomValue);
    console.log(password.charAt(randomNumber));
  }
  return password;
}



// Event listener for "Generate Passwor" button.
generateBtn.addEventListener("click", writePassword);
