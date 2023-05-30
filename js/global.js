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