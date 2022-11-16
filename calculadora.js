buttons = document.querySelectorAll("button");
let screen = document.getElementById("visor");
let screenValue = "";

for (item of buttons) {
    console.log(item.innerText)

    if (item.innerText == "Clear") {
        item.addEventListener("click", (e) => {
            displayClear()
        });
    } else if (item.innerText == "=") {
        item.addEventListener("click", (e) => {
            calculate()
        });
    } else if (item.innerText == "C/E") {
        item.addEventListener("click", (e) => {
            clearLastNumber()
        });
    } else {
        item.addEventListener("click", (e) => {
            buttonText = e.target.innerText;
            screenValue += buttonText;
            screen.innerText = screenValue;
        });
    }
}

function calculate() {
    try {
        screen.innerText = eval(screen.innerText)
    } catch (e) {
        screen.innerText = "Cálculo Inválido"
    }
}

function displayClear() {
    screenValue = ""
    screen.innerText = ""
}

function clearLastNumber() {
    const plus = screen.innerText.lastIndexOf("+")
    const substract = screen.innerText.lastIndexOf("-")
    const multiply = screen.innerText.lastIndexOf("*")
    const division = screen.innerText.lastIndexOf("/")

    const value = screen.innerText.substring(0, Math.max(plus, substract, multiply, division) + 1)
    screenValue = value
    screen.innerText = screenValue
}