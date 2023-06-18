// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // listed all variables desired
  var passwordText = document.querySelector("#password");
  var characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+132456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "1234567890"
  var specChar = "!@#$%^&*()_+"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var password = ""
  var selectedChar = ""
  // made blank bc we will be adding var into selected char when user select specifc char
  var selectAll = confirm("Include all character variants?");

  //  made new var to be able to toggle specific characters
  if (selectAll) {
    selectedChar += characters;
  } else {
    var selectLowerCase = confirm("Include lowercase characters?");
    var selectUpperCase = confirm("Include uppercase characters?");
    var selectNumber = confirm("Include numbers?");
    var selectSpecChar = confirm("Include special characters?");
  }
  if (selectLowerCase) {
    selectedChar += lowerCase;
  }
  if (selectUpperCase) {
    selectedChar += upperCase;
  }
  if (selectNumber) {
    selectedChar += number;
  }
  if (selectSpecChar) {
    selectedChar += specChar;
  }

  var valueLenght = parseInt(prompt("Enter the desired password length (between 8 and 128)"));

  if (isNaN(valueLenght) || valueLenght < 8 || valueLenght > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.")
    return "";
  }

// i = 0 is the declaration of the 'for' loop, must have 
  for (var i = 0; i < valueLenght; i++) {
    // console.log();
    var index = Math.floor(Math.random() * selectedChar.length);
    // password += characters.charAt(index);
    var computerChoice = selectedChar.charAt(index);

    password += computerChoice;

  }

  passwordText.value = password;

}
console.log(writePassword)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


