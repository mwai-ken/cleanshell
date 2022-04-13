const menubtn =document.querySelector(".menu-btn");
const nav =document.querySelector(".nav");

menubtn.addEventListener('click', ()=>{
    menubtn.classList.toggle('active');
    nav.classList.toggle('active');
});