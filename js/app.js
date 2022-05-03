document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let btn = document.querySelector(".menu");
    let el = document.querySelector("header div");
    let date = document.querySelector("footer p");

    btn.addEventListener("click", () => {
        el.classList.toggle("open");
        btn.innerHTML === "☰" ? btn.innerHTML = "X" : btn.innerHTML = "☰";
        
    });
});