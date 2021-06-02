import footerButton from "./footer__button.js"

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        footerButton(e, ".button")
    })
})