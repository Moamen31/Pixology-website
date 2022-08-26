


let navBar = document.querySelector("nav")
let scrollBtn = document.querySelector(".scroll-btn")

window.onscroll = () => {
    // header on scrolling
    if(window.scrollY >= 400){
        navBar.classList.add("show")
    }
    if (window.scrollY === 0){
        navBar.classList.remove("show")
    }

    // scroll to top btn
    if(window.scrollY >= 600){
        scrollBtn.classList.add("active")
    }
    else{
        scrollBtn.classList.remove("active")
    }
}

// scroll btn function
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
})