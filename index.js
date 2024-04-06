// mouseover and mouseleave events
document.addEventListener("DOMContentLoaded",()=> {
    const menuLink = document.getElementById("menu");

    menuLink.addEventListener("mouseenter",()=> {
        menuLink.textContent = 'Yum!';
    });

    menuLink.addEventListener("mouseleave",()=> {
        menuLink.textContent = "Menu";
    });
});

// keydown event
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === "h") {
            const navbar = document.getElementById("navbar");
            const navbarPosition = navbar.getBoundingClientRect().top;
            document.documentElement.scrollTo({
                top: navbarPosition,
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", (event) => {
        if (event.key === "e") {
            const navbar = document.getElementById("foot");
            const navbarPosition = navbar.getBoundingClientRect().top;
            document.documentElement.scrollTo({
                top: navbarPosition,
            });
        }
    });
});
