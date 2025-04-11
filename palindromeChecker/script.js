const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

function isPalindrome(str) {
    const regex = /[\W_]/g;
    const toLowerCase = str.replace(regex, "").toLowerCase();
    const toReverse = toLowerCase.split("").reverse().join("");
    
    if (toReverse === toLowerCase) {
        return true;
    }

    return false;
}

const palindromeChecker = input => {
    const userMsg = input;
    let checked = "";

    if (input == "") {
        alert("Please input a value");
        return;
    }

    result.replaceChildren();

    if(isPalindrome(input)) {
        checked = `${userMsg} is a palindrome.`;
    }
    else {
        checked = `${userMsg} is not a palindrome.`
    }
    
    const pMsg = document.createElement('p');
    pMsg.innerText = checked;
    result.appendChild(pMsg);

    result.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
    palindromeChecker(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    palindromeChecker(userInput.value);
    userInput.value = "";
})