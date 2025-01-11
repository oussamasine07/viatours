const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");
const menuClose = document.getElementById("close-list");


menuBtn.addEventListener("click", () => {
    menuList.style.display = "block";
    
    setTimeout(() => {
        menuList.style.opacity = "1";
        menuList.style.top = "80px";
    }, 100);
});

menuClose.addEventListener("click", () => {
    
    menuList.style.top = "50px";
    menuList.style.opacity = "0";

    console.log("conflict merge")

    setTimeout(() => {
        menuList.style.display = "none";
    }, 100);
});