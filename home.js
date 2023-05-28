// ----------------- SCRIPT FOR RESPONSIVE NAV BAR ---------------------

// Fonction pour le boutton pour dérouler le burger menu [Dropdown]

function ShowDropdownContent() {

var x = document.getElementById("myTopnav"); // variable pour facilité l'accès à l'identifiant du premier élément dans le header.

    if (x.className === "Nav_Bar") { // Si le nom de la classe est Nav_Bar (dans le css)

      // Rajoute .responsive dans le nom de la classe.

        x.className += " responsive"; // Activer le responsive / Activer le css qui permet d'adapter le header. [Laissez l'espace pour prendre effet]

        // In CSS, when you define a class with a space, it means that the class is a descendant of the previous class.
        // In this case, the space in the JavaScript code is indicating that the "responsive" class is a descendant of the "Nav_Bar" class.
        
    } else {
      // Sinon reviens à l'état d'origine.
        x.className = "Nav_Bar"; // 

    }
}



// Fonction pour montrer le contenu d'un "burger-menu" / Dropdown / menu déroulant.

var isHidden = true; // The dropDown content

function ShowInsideDropdownContent() {

  document.getElementById("first_dropdown").classList.toggle("show");

}

  // Ferme le menu déroulant quand l'utilisateur clique en dehors de lui.
window.onclick = function(event) {

    if (!event.target.matches('.dropbtn')) { // Si le clic est en dehors du bouton.

    var first_dropdown = document.getElementById("first_dropdown"); // Variable pour simplifié l'accès au menu en question.

    if(first_dropdown.classList.contains('show')){ // Si le menu déroulant est activé (les éléments de celui-ci sont affichés).
      
      first_dropdown.classList.remove("show"); // On enlève l'attribut "show" qui est activé lors du click sur le bouton.
      
      //Fin de boucle le menu est fermé. (Les éléments sont cachés)
    }
  }
}

// ----------------- SCRIPT FOR SCROLLING TO ELEMENT ---------------------

const links = document.querySelectorAll(".scroll_to"); // Constante pour selectionner tout les éléments de la classe "scroll_to".

links.forEach((item)=>{ // Pour chaque items

  item.addEventListener("click", ()=>{ // Quand un clic est effectué sur l'item (lien <a>).

    // Constante pour simplifier l'accès à l'élément qui à un identifiant pareille à celui du "data-link" du lien (<a>) cliqué. 

    const el = document.getElementById(item.getAttribute("data-link")); 
    
    // Scroll / fait défiler vers cet élément de manière douce en s'arrêtant au début / commencement de l'élément.
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