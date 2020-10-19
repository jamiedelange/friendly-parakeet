// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password);
}

function generatePassword() {
  var inputCharLength = parseInt(charLength());

  var lettersL = "abcdefghijklmnopqrstuvwxyz";
  var lettersU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var syms = "!@#$%^&*(){}[]<>/,.':;+-_";
  var nums = "1234567890";
  var alphabet = "";

  console.log("aaaaaaaa");

  var numbers = charNum();
  var symbols = charSymbol();
  var upper = charUpper();
  var lower = charLower();

  console.log("aaaaaaaa");

    if (numbers) {
      alphabet += nums;
    }
    if (symbols) {
      alphabet += syms;
    }
    if (upper) {
      alphabet += lettersU;
    }
    if (lower) {
      alphabet += lettersL;
    }

    var password = "";

    console.log(inputCharLength)
    console.log(typeof(inputCharLength))
    for (var i = 0; i < inputCharLength; i ++) {
      var index = Math.floor(Math.random() * alphabet.length);
        var char = alphabet.charAt(index);
          password += char;
          console.log("loop");
    }
    
    return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// request desired password length
var charLength = function() {
  var charLengthPrompt = window.prompt("How many characters do you want your password to be? Choose any number between 8 and 128");
  charLengthPrompt = parseInt(charLengthPrompt);
    if (charLengthPrompt < 8 || charLengthPrompt > 128) {
      window.alert("Invalid input. Please enter a number between 8 and 128.");
      charLength();
    } else {
      window.alert("Your password will be " + charLengthPrompt + " characters long.");
     // console.log(parseInt(charLengthPrompt));
    }
}

// upper case yes/no
var charUpper = function() {
  var charUpperConfirm = window.confirm("Would you like your password to contain upper case characters?");
    if (charUpperConfirm) {
      window.alert("Upper case characters will be allowed.");

    } else {
      window.alert("Upper case characters will not be allowed.");
    }
}

// lower case yes/no
var charLower = function() {
  var charLowerConfirm = window.confirm("Would you like your password to contain lower case characters?");
    if (charLowerConfirm) {
      window.alert("Lower case characters will be allowed.");
    } else {
      window.alert("Lower case characters will not be allowed.");
    }
}

// numbers yes/no
var charNum = function() {
  var charNumPrompt = window.confirm("Would you like your password to contain numbers?");
    if (charNumPrompt) {
      window.alert("Numbers will be allowed.");
    } else {
      window.alert("Numbers will not be allowed.");
    }
}

// symbols yes/no
var charSymbol = function() {
  var charSymbolConfirm = window.confirm("Would you like your password to contain symbols?");
    if (charSymbolConfirm) {
      window.alert("Symbols will be allowed.");
    } else {
      window.alert("Symbols will not be allowed.");
    }
}




