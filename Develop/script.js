//Create a function that returns to a user a randomized password
//Generate random string of characters
//when button is clicked prompts pop up to ask the user password criteria
//prompt for length of password at least 8 characters no more than 128
//prompt for character type, lowercase, uppercase, numeric, and/or special characters
//at least one character type should be selected
//when all prompts are ansered, then password is generated using the info from prompts
//display password in alert or WRITTEN TO THE HTML

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !@#$%^&*()+<=>?{][}|`~_-/;:";

function getPasswordOptions() {
  //variable to store the length of password from user input
  var length = parseInt(
  prompt('How many characters would you like your password to contain?'));
 
  if (length < 8 || length > 128) {
    alert("Please provide a number between 8 and 128.");
    return getPasswordOptions();
  }
}

// Assignment code here


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
