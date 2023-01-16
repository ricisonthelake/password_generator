// ********************
// REQUIREMENTS
// ********************
// Build it from scratch
// Generate two random passwords when the user clicks the button
// Each password should be 15 characters long
//
// *********************
// STRETCH GOALS
// *********************
// Ability to set password length
// Add "copy-on-click"
// Toggle "symbols" and "numbers" on/off
// 

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const numericChrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialChrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const alphaChrs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let pwd1El = document.getElementById("pwd1");
let pwd2El = document.getElementById("pwd2");

generateBtn.addEventListener("click", function () {

    var includeNumbersEl = document.getElementById("includeNumbers");
    var includeSpecialChrsEl = document.getElementById("includeSpecialChrs");

    let pwdLength = document.getElementById("pwdLength").value;
    let y = pwdLength;

    if (pwdLength < 6 || pwdLength > 15) {
        alert("please enter a length between 6 and 15")
        return
    } else {
        var pwd1Arr = [];
        for (i = 0; i < y; i++) {
            var randomIndexOne = Math.floor(Math.random() * characters.length);
            var randomIndexTwo = Math.floor(Math.random() * numericChrs.length);
            var randomIndexThree = Math.floor(Math.random() * specialChrs.length);
            var randomIndexFour = Math.floor(Math.random() * alphaChrs.length);


            if (includeNumbersEl.checked == true && includeSpecialChrsEl.checked == true) {
                pwd1Arr.push(characters[randomIndexOne]);
            } else if (includeNumbersEl.checked == true && includeSpecialChrsEl.checked == false) {
                pwd1Arr.push(numericChrs[randomIndexTwo]);
            } else if (includeNumbersEl.checked == false && includeSpecialChrsEl.checked == true) {
                pwd1Arr.push(specialChrs[randomIndexThree]);
            } else {
                pwd1Arr.push(alphaChrs[randomIndexFour]);
            };
        };

        pwd1El.textContent = pwd1Arr.join('');

        var pwd2Arr = [];
        for (i = 0; i < y; i++) {
            var randomIndexOne = Math.floor(Math.random() * characters.length);
            var randomIndexTwo = Math.floor(Math.random() * numericChrs.length);
            var randomIndexThree = Math.floor(Math.random() * specialChrs.length);
            var randomIndexFour = Math.floor(Math.random() * alphaChrs.length);

            if (includeNumbersEl.checked == true && includeSpecialChrsEl.checked == true) {
                pwd2Arr.push(characters[randomIndexOne]);
            } else if (includeNumbersEl.checked == true && includeSpecialChrsEl.checked == false) {
                pwd2Arr.push(numericChrs[randomIndexTwo]);
            } else if (includeNumbersEl.checked == false && includeSpecialChrsEl.checked == true) {
                pwd2Arr.push(specialChrs[randomIndexThree]);
            } else {
                pwd2Arr.push(alphaChrs[randomIndexFour]);
            };
        };

        pwd2El.textContent = pwd2Arr.join('');
    }



});

copyBtn1.addEventListener("click", function () {
    var newPwd1 = document.getElementById("pwd1").innerText;
    navigator.clipboard.writeText(newPwd1)
    alert("password copied to clipboard");
});

copyBtn2.addEventListener("click", function () {
    var newPwd2 = document.getElementById("pwd2").innerText;
    navigator.clipboard.writeText(newPwd2)
    alert("password copied to clipboard");
});