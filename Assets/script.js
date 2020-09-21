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
  
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers = "0123456789";
  specialCharacter = " !@#$%^&*()+<=>?{][}|`~_-/;:";

  //empty strings to store the user selections

  var userFinalPassword = '';
  var userInput = generatePasswordDetails();
  var passwordPossibilities = '';

  //conditional statements, if userInput true for a prompt then add corresponding prompt to password variable

  if(userInput.hasLowerCasedCharacters){
    passwordPossibilities += lowerCase;

  }

  if(userInput.hasUpperCasedCharacters){
    passwordPossibilities += upperCase;

  }

  if(userInput.hasNumericCharacters){
    passwordPossibilities += numbers;

  }

  if(userInput.hasSpecialCharacters){
    passwordPossibilities += specialCharacter;

  }

  //adding a random selection from password possibilites to final password

  for (i = 0; i < userInput.length; i++) {
  userFinalPassword += passwordPossibilities.charAt(Math.floor(Math.random() * passwordPossibilities.length));
  }
  
  //pushing the randomized password to finalpassword
  
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
