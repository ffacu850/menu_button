const footerButton = (e, selector) => {
    if(e.target.matches(selector)) {
        document.querySelector(".category").classList.toggle("active")
    }
}

export default footerButton