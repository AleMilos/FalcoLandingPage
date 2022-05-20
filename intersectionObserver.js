const targets = document.querySelectorAll('.step-bubble');

console.log(targets.length)

const funzione = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry =>{ 
            const bubble = entry.target;
            const bubbleCounter = entry.target.getElementsByClassName('bubble-counter')[0];

            if(entry.isIntersecting){
                bubble.classList.add('show-step-bubble')
                bubbleCounter.classList.replace('bubble-counter','show-bubble-counter')

                observer.disconnect()
            }
            else{
                
            }
        })
    });
     
    io.observe(target);
};

targets.forEach(funzione);

