
// toggle style switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
const styleSwitcher = document.querySelector(".style-switcher");
window.addEventListener("scroll", ()=>{
    if (styleSwitcher.classList.contains("open")){
        styleSwitcher.classList.remove("open");
    }
})


// theme colors

const alternateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
   alternateStyle.forEach((style)=>{
    if( color === style.getAttribute("title")){
        style.removeAttribute("disabled")
    }
    else{
        style.setAttribute("disabled", "true");
    }
   })
}

// light and dark mode

const dayNight = document.querySelector(".day-night");
const darkBody = document.querySelector("body");
var homeLogo = document.querySelector(".home-image");

dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.querySelector("body").classList.toggle("dark");
   
    if (document.body.classList.contains("dark")) {
        homeLogo.src = "images/2.svg";
    } else {
        homeLogo.src = "images/1.svg";
    }

})


window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
              
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
        
    }
})

