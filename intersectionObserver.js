const bubbles = document.querySelectorAll(".step-bubble");
const titles = document.querySelectorAll(".step-title");

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-step-bubble", entry.isIntersecting);
        entry.target.getElementsByClassName('bubble-counter')[0].classList.toggle("show-bubble-counter", entry.isIntersecting);
        
        
        //if(entry.isIntersecting) observer.unobserve(entry.target) NEL CASO IN CUI VOGLIO 1 sola animation

    })

},
{
    threshold: 1
})

const observerTitles = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show-step-title", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target) 
        //NEL CASO IN CUI VOGLIO 1 sola animation

    })

},
{
    // threshold: 1
})


bubbles.forEach(bubble => {
    observer.observe(bubble)
})

titles.forEach(title => {
        observerTitles.observe(title)
    })

    
const mq = window.matchMedia( "(max-width:40.625em)" );

//  if (!mq.matches) {
//      console.log("test");
      
//  } else {
//      titles.forEach(title => {
//         observerTitles.observe(title)
//      })
// }
/*
    bubbles.forEach(bubble => {
        observer.observe(bubble)
    })
*/

