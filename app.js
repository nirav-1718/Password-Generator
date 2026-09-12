const outputSpan = document.querySelector(".output-text span");
const lengthValue = document.getElementById("length");
const lenVal = document.getElementById("lenVal");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generatebtn = document.getElementById("generatebtn");

lengthValue.addEventListener("input", ()=>{
  lenVal.textContent = lengthValue.value;
})

function generatePassword() {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberchars = "0123456789";
  const symbolchars = "!@#$%&*(){}?~";

  let charSet = "";

  if(upper.checked) {
    charSet = charSet + upperChars;
  }
  if(lower.checked) {
    charSet = charSet + lowerChars;
  }
  if(number.checked) {
    charSet = charSet + numberchars;
  }
  if(symbol.checked) {
    charSet = charSet + symbolchars;
  }

  if(charSet === "") {
    outputSpan.textContent = "select atleast one category to create password.";
    return
  }

  const length = parseInt(lengthValue.value, 10);
  let password = "";
  
  for (let i = 0; i < length; i++){
    const  randIndex = Math.floor(Math.random() * charSet.length);
    password = password + charSet[randIndex];
  }

  outputSpan.textContent = password;
}

generatebtn.addEventListener("click", generatePassword);