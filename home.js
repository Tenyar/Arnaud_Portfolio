// ----------------- SCRIPT FOR RESPONSIVE NAV BAR ---------------------

// Fonction pour le boutton pour dérouler le burger menu [Dropdown]

function ShowDropdownContent() {

var x = document.getElementById("myTopnav");

    if (x.className === "Nav_Bar") {

        x.className += " responsive";

    } else {

        x.className = "Nav_Bar";

    }
}



// Fonction pour montrer le contenu d'un "burger-menu" / Dropdown / menu déroulant.

var isHidden = true; // The dropDown content

function ShowInsideDropdownContent() {

  document.getElementById("first_dropdown").classList.toggle("show");

}
  // Ferme le menu déroulant quand l'utilisateur clique en dehors de lui.
window.onclick = function(event) {

    if (!event.target.matches('.dropbtn')) { // Si le click est en dehors du bouton

    var first_dropdown = document.getElementById("first_dropdown"); // Variable pour simplifié l'accès au menu en question

    if(first_dropdown.classList.contains('show')){ // Si le menu déroulant est activé (les éléments de celui-ci sont affichés).
      
      first_dropdown.classList.remove("show"); // On enlève l'attribut "show" qui est activé lors du click sur le bouton
      
      //Fin de boucle le menu est fermé. (Les éléments sont cachés)
    }
  }
}

// ----------------- SCRIPT FOR SCROLLING TO ELEMENT ---------------------

const links = document.querySelectorAll(".scroll_to");
links.forEach((item)=>{

  item.addEventListener("click", ()=>{
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({behavior: "smooth", block: "start"})
  })

})

// ----------------- SCRIPT FOR FADING IMAGE ---------------------
/*
var test = document.getElementById('hero-image');
window.addEventListener('scroll', function(e) {
  // http://stackoverflow.com/a/28633515/962603 [DOCUMENTATION ON THE FUNCTION]
  var scroll = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop || 0;
  test.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 2));
});
*/

// ----------------- SCRIPT FOR DROPDOWN MENU ---------------------

    /* When the user clicks on the button, 
              toggle between hiding and showing the dropdown content */
              /*
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
*/

  // ----------------- SCRIPT FOR ANIMATED ELEMENT ON SCROLL -----------------