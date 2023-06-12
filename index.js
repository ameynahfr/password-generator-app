let password = document.querySelector(".result")

let rangeInput = document.querySelector("#range-input")
let rangeValue = document.querySelector("#range-value")

let capital = document.querySelector("#uppercase")
let small = document.querySelector("#lowercase")
let number = document.querySelector("#number")
let symbol = document.querySelector("#symbol")

let clipboard = document.querySelector(".clipboard")

let hasUppercase = true
let hasLowercase = true
let hasNumbers = true
let hasSymbols = false

//Arrays:

let upperCase = [];
for(let i = 65; i <=90; i++) {
    upperCase.push(String.fromCharCode(i));
}

let lowerCase = [];
for(let i = 97; i <=122; i++) {
    lowerCase.push(String.fromCharCode(i));
}

let numbers = [];
for(let i = 0; i<=9; i++){
    numbers.push(i);
}

let symbols =  ['!', '@', '#', '$', '%', '^', '&', '*', 
                '(', ')', '-', '_', '+', '=',
                '[', ']', '{', '}', '|', '\\', 
                ';', ':', "'", '"', ',', '.', 
                '/', '<', '>', '?'];


function updateRangeValue() {
    rangeValue.textContent = rangeInput.value;
  }

function handleCheckboxChange() {
    hasUppercase = capital.checked;
    hasLowercase = small.checked;
    hasNumbers = number.checked;
    hasSymbols = symbol.checked;
    
}

//Generating a random password
function upperCasePassword(){
    let randomPassword = Math.floor(Math.random() * upperCase.length);
    return upperCase[randomPassword];
}

function lowerCasePassword(){
    let randomPassword = Math.floor(Math.random() * lowerCase.length);
    return lowerCase[randomPassword];
}

function numberPassword(){
    let randomPassword = Math.floor(Math.random() * numbers.length);
    return numbers[randomPassword];
}

function symbolPassword(){
    let randomPassword = Math.floor(Math.random() * symbols.length);
    return symbols[randomPassword];
}




function generatePassword(){
    let output = "";
    for(i = 0; i < rangeInput.value; i++){
        if(hasUppercase){
            output += upperCasePassword()
        }
        if(hasLowercase){
            output += lowerCasePassword()
        }
        if(hasNumbers){
            output += numberPassword()
        }
        if(hasSymbols){
            output += symbolPassword()
        }
    }
    passwordGenerated = output.slice(0, rangeInput.value);
    password.textContent = passwordGenerated;

    isCopied = false;
}  

/*In the copyToClipboard() function,
 we create a new textarea element, 
 set its value to the generated password, 
 append it to the document body, 
 select its content, 
 execute the copy command, 
 and then remove the textarea element from the document.
*/

let isCopied = false;

function copy() {
    const el = document.createElement('textarea');
    el.value = passwordGenerated;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (!isCopied) {
        // Append "copied" message at the end of the div
        password.textContent += "                        [copied]";
        isCopied = true;
      }
    //alert('Password has been copied to clipboard!');
  }
  
  
