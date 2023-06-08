  
  
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