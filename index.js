const nav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
const body = document.querySelector("body")

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible")
    const bodyVisible = body.getAttribute('data-visible');
    if (visibility === "false") {
        nav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    }
    else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }

    if (bodyVisible === "false") {
        body.setAttribute("data-visible", true)
    } else if (bodyVisible === "true") {
        body.setAttribute("data-visible", false)
    }

    console.log(navToggle.getAttribute('aria-expanded'));
})