const elementVisible = document.querySelectorAll(".revealOnScroll");

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            if(entry.target.classList.contains("ejeX")){
                entry.target.classList.add("appearanceToCenter")
            } else if(entry.target.classList.contains("invisible")){
                entry.target.classList.add("appear")
            }
            console.log("la puta madre!!");
        }
    })
})
elementVisible.forEach(item => {
    observer.observe(item);
})