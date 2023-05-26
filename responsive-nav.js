
let isMenuOpen = false //výchozí stav menu
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const menuBtn = document.querySelector(".menu-btn")


 
function toggleMenu() {
    isMenuOpen = true
    isMenuOpen = !isMenuOpen
}

// Funkce která na kliknutí jinde než na hamburger nebo dropdown menu schová dropdown menu
const handleClickOutside = (event) => {
    if (!navMenu.contains(event.target) && event.target !== menuBtn) {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
      toggleMenu()
    } else {}
}

menuBtn.addEventListener("click", () => {
    //Výchozí hodnota - menu není otevrene se na kliknutí změní na opačnou boolean hodnotu
    isMenuOpen = !isMenuOpen
    //V tuto chvíli je isMenuOpen true a provede se podmínka
    if(isMenuOpen){
        menuBtn.classList.add("open")
        navMenu.classList.add("open")
        
        document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => { 
            navMenu.classList.remove("open")
            //Zpozdeni druhe akce, aby se stihla provest pred removnutim classy open
            setTimeout(() => {
                menuBtn.classList.remove("open");
                }, 10)

            menuBtn.classList.remove("open")
            toggleMenu()
        }))

        //Nefunguje :( Ví někdo proč? :D =>
        // const body = document.querySelector("body")
        // body.addEventListener("click", handleClickOutside)

    } else{
        navMenu.classList.remove("open")
        menuBtn.classList.remove("open")
    }
})
