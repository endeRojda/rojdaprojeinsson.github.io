
const header = document.querySelector("header");
const menuBtn = document.querySelector("#meny-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", ()=>{
    header.toggle("show-mobile-menu");
});
