let register = document.querySelector('.register');
let login = document.querySelector('.login');

let zIndex = 1;

login.addEventListener("click", (e) => {
    register.style.transform = "translateY(-300px)"
    register.addEventListener("transitionend", (e) => {
        register.style.zIndex = zIndex++
        register.addEventListener("transitionend", (e) => {
            register.style.width = "500px"
            register.style.transform = "translateY(0px)"
            login.style.width = "300px"
            login.style.transform = "translateY(-100px)"
        }, { once: true })
    }, { once: true })
})

register.addEventListener("click", (e) => {
    login.style.transform = "translateY(-300px)"
    login.addEventListener("transitionend", (e) => {
        login.style.zIndex = zIndex++
        login.addEventListener("transitionend", (e) => {
            login.style.width = "500px"
            login.style.transform = "translateY(0px)"
            register.style.width = "300px"
            register.style.transform = "translateY(-100px)"
        }, { once: true })
    }, { once: true })
})

