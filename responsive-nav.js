const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu ") 
const body = document.querySelector("body")

// Funkce která na kliknutí jinde než na hamburger nebo dropdown menu schová dropdown menu
const handleClickOutside = (event) => {
    if (!navMenu.contains(event.target) && event.target !== hamburger) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
}

hamburger.addEventListener("click", () => {
    
    //Na elementu .hamburger vyber classu .active a udělej s ní toggle
    hamburger.classList.toggle("active")

    //Na elementu .nav-menu vyber classu .active a udělej s ní toggle (aplikuje se na položky v .nav-menu)
    navMenu.classList.toggle("active")

    //Po kliknutí na odkaz v menu se skryje celý dropdown menu
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))

    //Po kliknutí jinde než na .hamburger nebo .nav-menu zavři dropdown menu
    body.addEventListener("click", handleClickOutside);
}) 

