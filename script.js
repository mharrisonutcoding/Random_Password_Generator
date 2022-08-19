// Assignment Code
var generateBtn = document.querySelector("#generate");

// added function to generate random number
function randomInt(min, max) {
    if (!max) {
        max = min
        min = 0
    }
    
    var rand = Math.random()
    return Math.floor(min*(1-rand) + rand*max)
}

// gives random position in a list
function getRandomItem(list) {
    return list[randomInt(list.length)]
}

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



    // Different command prompts for acceptance criteria

    var numPref = window.confirm("Would you like Numbers included in your password?")
    var symPref = window.confirm("Would you like Symbols added?")
    var lowerPref = window.confirm("Would you like to include Lowercase letters?")
    var upperPref = window.confirm("Would you like to include Uppercase letters?")
    
    // Corresponding arrays for valid character inputs by the user

    var numberList = ["0","1","2","3","4","5","6","7","8","9"]
    var symbolList = ["!","@","#","$","%","_","&"]
    var lowercaseList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var uppercaseList = []

    var optionsCart = [numberList]

    // If statements to log array list that the user chooses in the character input prompts, and pushes them into the optionsCart array

    for (var i = 0; i < lowercaseList.length; i++) {
        uppercaseList[i] = lowercaseList[i].toUpperCase()
    }
    
    if (numPref === true) {
        optionsCart.push(numberList)
    }

    if (symPref === true) {
        optionsCart.push(symbolList)
    }
    
    if (lowerPref === true) {
        optionsCart.push(lowercaseList)
    }
    
    if (upperPref === true) {
        optionsCart.push(uppercaseList)
    }

    // if no options are selected above, it will default to the uppercase list

    if (optionsCart.length === 0) {
        optionsCart.push(uppercaseList)
    }

    // console.log(optionsCart)

    var passwordGen = ""

    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandomItem(optionsCart)
        var randomChar = getRandomItem(randomList)
        passwordGen += randomChar
    }

    // console.log(passwordGen)
    return passwordGen



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);