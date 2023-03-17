let infoBtns = document.querySelectorAll(".info-item .btn");
let formBtns = document.querySelector(".container-form .btn");
infoBtns.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("log-in");
    });
})
