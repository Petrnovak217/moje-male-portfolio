//navigation
let menuBtn = document.querySelector(".menu-btn")
let navBtn = document.querySelector(".menu-btn__burger")
let nav = document.querySelector(".nav")
let navMenu = document.querySelector(".menu-nav")
let navItems = document.querySelectorAll(".menu-nav-item")
let projectsbtn = document.querySelectorAll(".projects-btns")


let mobileNavOpen = false


menuBtn.addEventListener("click",() =>{

    console.log("ahoj")
    
    if(!mobileNavOpen){
        navBtn.classList.toggle("open")
        nav.classList.toggle("open")
        navMenu.classList.toggle("open")
        navItems.forEach((item) =>{ item.classList.toggle("open")})
        projectsbtn.forEach((item) =>{ item.classList.toggle("open")})

        mobileNavOpen=false
    }
})


