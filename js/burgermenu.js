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

  let text = document.getElementById("dropbtnJsArrow").innerHTML; // 'let' est une variable qui ne se redéfinie pas (sauf quand c'est locale). is for not having to redeclare this variable because it's "frozen" (will never change).
  
  function ShowInsideDropdownContent() {
  
    document.getElementById("first_dropdown").classList.toggle("show");
    document.getElementById("dropbtnJsArrow").innerHTML = text.replace("↓", "↑"); // Change la direction de la flèche (Replace only the arrow character in the whole sentence).
  
  }
  
    // Ferme le menu déroulant quand l'utilisateur clique en dehors de lui.
  window.onclick = function(event) {
  
      var first_dropdown = document.getElementById("first_dropdown"); // Variable pour simplifié l'accès au menu en question.
      
  
      if (event.target.matches('.dropbtn') && !first_dropdown.classList.contains("show")){ // to make sure that for any circumstances the arrow will be changed.
        document.getElementById("dropbtnJsArrow").innerHTML = text.replace("↑", "↓");
      }
      
      if (!event.target.matches('.dropbtn')) { // Si le clic est en dehors du bouton.
     
      if(first_dropdown.classList.contains('show')){ // Si le menu déroulant est activé (les éléments de celui-ci sont affichés).
        
        first_dropdown.classList.remove("show"); // On enlève l'attribut "show" qui est activé lors du click sur le bouton.
        document.getElementById("dropbtnJsArrow").innerHTML = text.replace("↑", "↑"); // Change arrow direction (Replace only the arrow character in the whole sentence).
        //Fin de boucle le menu est fermé. (Les éléments sont cachés)
      }
    }
  }
  