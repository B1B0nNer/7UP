const homePage = document.querySelector(".home_link");
const shopListPage = document.querySelector(".shop_list_link");

if (location.pathname.split("/").pop() == "index.html"){
    shopListPage.classList.remove("menu__link--current")
    homePage.classList.add("menu__link--current");
};
if (location.pathname.split("/").pop() == "shopping-list.html"){
    homePage.classList.remove("menu__link--current");
    shopListPage.classList.add("menu__link--current");
};