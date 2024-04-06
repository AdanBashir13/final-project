document.addEventListener("DOMContentLoaded",()=> {
    const menuLink = document.getElementById("menu");

    menuLink.addEventListener("mouseenter",()=> {
        menuLink.textContent = 'Yum!';
    });

    menuLink.addEventListener("mouseleave",()=> {
        menuLink.textContent = "Menu";
    });
});

