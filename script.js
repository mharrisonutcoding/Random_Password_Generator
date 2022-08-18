// Assignment Code
var generateBtn = document.querySelector("#generate");

// function for generate password and prompt the user for criteria
function generatePassword() {
    var userInput = window.prompt("What should the length of your password be? Choose between 8 and 128 characters!");
    // console.log(userInput)

    var passwordLength = parseInt(userInput)

    // Validation check for correct character type
    
    if (isNaN(passwordLength)) {
        window.alert("Not a number! Use numerical characters!")
        return 
        // if the fuction continues on, the character input is then validated, otherwise the alert would be triggered
    } 


    // Criteria for password 
    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password must be between 8 and 128 characters!")
        return
    }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);