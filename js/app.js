let hamburger=  document.querySelector(".toggle");
let line1 = document.querySelector(".line1")
let line2 = document.querySelector(".line2")
let line3 = document.querySelector(".line3")
let navbarCollapse = document.querySelector(".navbar-collapse")

hamburger.addEventListener("click", () => {
    line2.classList.toggle("opacityZero");
    line1.classList.toggle("plusRotate");
    line3.classList.toggle("minusRotate");
    navbarCollapse.classList.toggle("active");
    document.querySelector(".overlay").classList.toggle("d-block")
})