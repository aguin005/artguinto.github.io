const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const checkTelephoneNumber = num => {
    if (num === "") {
        alert("Please provide a phone number");
        return;
    }

    console.log(num);

    const regex = /^1?\s?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    if (regex.test(num)) {
        const p = document.createElement("p");
        p.textContent = `Valid US number: ${num}`;
        resultsDiv.appendChild(p);
    }
    else {
        const p = document.createElement("p");
        p.textContent = `Invalid US number: ${num}`;
        resultsDiv.appendChild(p);
    }
}

checkBtn.addEventListener("click", () => {
    checkTelephoneNumber(userInput.value);
    userInput.value = "";
}) 

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkTelephoneNumber(userInput.value);
        userInput.value = "";
    }
})

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
})