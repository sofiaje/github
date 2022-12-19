const primaryNav = document.querySelector(".primary-nav");
const menuBtn = document.querySelector(".mobile-nav-toggle");

menuBtn.addEventListener("click", () => {
    
    if (primaryNav.getAttribute("data-visible") === "false") {
        primaryNav.setAttribute("data-visible", true);
        menuBtn.setAttribute("aria-expanded", true)
    } else {
        primaryNav.setAttribute("data-visible", false);
        menuBtn.setAttribute("aria-expanded", false)
    }
})