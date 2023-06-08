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

  