document.addEventListener("DOMContentLoaded", () => {
    const btnNavEl = document.querySelector(".btn-mobile-nav");
    const headerEl = document.getElementsByClassName('header')[0];

    console.log(btnNavEl)
    console.log(headerEl)
    btnNavEl.addEventListener("click", function(){
        headerEl.classList.toggle("nav-open");

    })
})