const bubbles = document.querySelectorAll(".step-bubble");
console.log(bubbles);

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-step-bubble", entry.isIntersecting);
        entry.target.getElementsByClassName('bubble-counter')[0].classList.toggle("show-bubble-counter", entry.isIntersecting);
        //if(entry.isIntersecting) observer.unobserve(entry.target)
    })

},
{
    threshold: 1
})

bubbles.forEach(bubble => {
    observer.observe(bubble)
})