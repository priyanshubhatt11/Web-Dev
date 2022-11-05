let nav = document.querySelector("nav");
const mobileS = document.querySelector(".mobile-nav")
window.addEventListener("scroll" , ()=>{
    nav.classList.toggle("sticky" , window.scrollY >0);
    mobileS.classList.toggle("scroll" , window.scrollY>5);
    logo.classList.toggle("topToggle", window.scrollY>5);
})
const logo = document.querySelector(".toggle-btn");
        
    logo.addEventListener("click",() =>{
        nav.classList.toggle("active");
        
})

