

var elBurgerBtn = document.querySelector(".header__burger");
elBurgerBtn.addEventListener("click" , function(){
    elBurgerBtn.closest(".header").classList.toggle("header__nav-open")
})