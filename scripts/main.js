const minMenu = document.querySelector(".main__min-menu");
const menuButton = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-long-arrow-alt-up");
const footerNewsBlock = document.querySelector(".footer__news-block");
const nextNews = document.querySelector(".fa-arrow-right");
const newsDescription = document.querySelector(".description");
const searchButton = document.querySelector(".fa-search");
const searchInput = document.querySelector(".search-min");
const body = document.querySelector(".header");


function showMenu(){
    minMenu.classList.toggle("is-open");
    menuButton.style.display = "none";
    closeMenu.style.display = "flex";
}
function closeMenuModal(){
    minMenu.classList.toggle("is-open");
    menuButton.style.display = "flex";
    closeMenu.style.display = "none";
}
function showNextNews(){
    console.log("next");
    footerNewsBlock.style.display = "flex";
    newsDescription.style.display = "flex";
}
function closeUp(){
    searchInput.style.display = "none";
    searchButton.style.display = "flex";
}
function showSearch(){
    searchInput.style.display = "flex";
    searchButton.style.display = "none";
    searchInput.onblur = closeUp;
}


searchButton.addEventListener("click", showSearch);
menuButton.addEventListener("click", showMenu);
closeMenu.addEventListener("click", closeMenuModal);
// nextNews.addEventListener("click", showNextNews);

// const swiper = new Swiper(...)
