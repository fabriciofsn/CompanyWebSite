const btn_menu = document.querySelector(".btn-open");
const btn_close = document.querySelector(".btn-close");
const mobile = document.querySelector("nav.mobile");

const currentYear = document.querySelector(".year");

function openMenu(){
    mobile.style.right = '0';  
}

function closeMenu(){
    mobile.style.right = '-200px';
}

btn_close.addEventListener("click", closeMenu);
btn_menu.addEventListener("click", openMenu);

const year = new Date().getFullYear();
currentYear.innerHTML = year;

