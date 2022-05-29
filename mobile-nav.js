const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.getElementsByClassName(".header");


console.log(btnNavEl)
console.log(headerEl)

btnNavEl.addEventListener("click", function(){
    headerEl.classList.toggle("nav-open");
});