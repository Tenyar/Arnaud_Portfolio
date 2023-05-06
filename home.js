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