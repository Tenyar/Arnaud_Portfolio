  // ----------------- SCRIPT FOR RESPONSIVE NAV BAR ---------------------
// Fonction pour le boutton pour dérouler le burger menu [Dropdown]

function myFunction() {
var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// ----------------- SCRIPT FOR FADING IMAGE ---------------------

var test = document.getElementById('hero-image');
window.addEventListener('scroll', function(e) {
  // http://stackoverflow.com/a/28633515/962603 [DOCUMENTATION ON THE FUNCTION]
  var scroll = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop || 0;
  test.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 2));
});


// ----------------- SCRIPT FOR DROPDOWN MENU ---------------------

    /* When the user clicks on the button, 
              toggle between hiding and showing the dropdown content */
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


  // ----------------- SCRIPT FOR ANIMATED ELEMENT ON SCROLL -----------------