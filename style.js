document.addEventListener("DOMContentLoaded", function () {
    let counter = 0;

    const counterValue = document.querySelector("#counterValue");
    const increaseBtn = document.querySelector("#increase");
    const decreaseBtn = document.querySelector("#decrease");
    const sendBtn = document.querySelector("#sendBtn");
    const numberInput = document.querySelector("#numberInput");
    const colorBtn = document.querySelector("#colorBtn");

    increaseBtn.addEventListener("click", () => {
        counter++;
        counterValue.textContent = counter;
    });

    decreaseBtn.addEventListener("click", () => {
        counter--;
        counterValue.textContent = counter;
    });

    sendBtn.addEventListener("click", () => {
        alert(`You entered: ${numberInput.value}`);
    });

    colorBtn.addEventListener("click", () => {
        document.body.style.backgroundColor =
            "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
});