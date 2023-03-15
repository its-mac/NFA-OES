let inforBtns = document.querySelectorAll(".info-item .btn");
inforBtns.forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelector(".container").classList.toggle("log-in");
    });
})
document.querySelector(".container-form .btn").addEventListener("click", () => {
    document.querySelector(".container").classList.add("active");
});