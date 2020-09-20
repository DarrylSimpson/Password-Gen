//function that gets user input and gives it to generate function

function generatePasswordDetails() {
  //variable to store the length of password from user input
  var length = parseInt(
  prompt('How many characters would you like your password to contain?'));

  //if length is less than 8 or more than 128 make an alert, and then run it again
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please provide a number between 8 and 128.");

    return generatePasswordDetails;
  }

  //confirm if you want to include 

  var hasSpecialCharacters = confirm(
  'Click OK to include special characters.'
  );

  var hasNumericCharacters = confirm(
  'Click OK to include numeric characters.'
  );

  var hasLowerCasedCharacters = confirm(
  'Click OK to include lower case characters.'
  );

  var hasUpperCasedCharacters = confirm(
  'Click OK to include upper case characters.'
  );

  //Object to store user input

  var password = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  
  return password;
}

//function that generates password based on user options
function generatePassword(){

  //arrays to declare what the generate function will pick from if the user wants that option

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacter = " !@#$%^&*()+<=>?{][}|`~_-/;:";

  var userFinalPassword = '';
  var userInput = generatePasswordDetails();
  var passwordPossibilities = '';

  if(userInput.hasLowerCasedCharacters){
    passwordPossibilities += lowerCase;

  }

  
  for (let i = 0; i < userInput.length; i++) {
  userFinalPassword += passwordPossibilities.charAt(Math.floor(Math.random() * passwordPossibilities.length));
  }
  
  return userFinalPassword;
  
  
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
