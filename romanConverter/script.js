const number = document.getElementById("number");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

const convertToRoman = input => {
    let userNum = input;
    let romanNumeral = "";

    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

    let i = 12;

    while (userNum > 0) {
        let div = Math.floor(userNum/num[i]);
        userNum = userNum % num[i]; 

        while (div--) {
            romanNumeral += sym[i];
        }
        i--;
    }

    output.innerHTML = romanNumeral;
}

const checkInput = input => {
    const userNum = parseInt(input);

    if (userNum <= 0) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
        output.classList.remove("hidden");
    }
    else if (userNum > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
        output.classList.remove("hidden");
    }
    else if (input === "") {
        output.innerHTML = "Please enter a valid number";
        output.classList.remove("hidden");
    }
    else {
        output.classList.remove("hidden");
        convertToRoman(userNum);
    }
}

convertBtn.addEventListener("click", () => {
    checkInput(number.value);
})

number.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkInput(number.value);
    }
})