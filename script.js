const form = document.querySelector(".form");
const select = document.querySelector(".select");
const color = document.getElementById("color");
const figure = document.querySelector(".figure");

select.addEventListener("change", () => {
    figure.classList.add(`${select.value}`);
    figure.classList.forEach(() => {
        if (figure.classList[1] !== select.value) {
            figure.classList.remove(`${figure.classList[1]}`);
        }
    })
});

color.addEventListener("input", () => {
    figure.style.background = `${color.value}`;
});

form.addEventListener("keydown", e => {
    if(e.keyCode == 13) {
       e.preventDefault();
    }
 });