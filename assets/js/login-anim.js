let infoBtns = document.querySelectorAll(".info-item .btn");
infoBtns.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("log-in");
    });
})
