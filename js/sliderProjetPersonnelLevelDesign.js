var slider_img_level_design = document.querySelector('.slider_img_level_design'); // On prend l'image courante du slider.

var anneeImage = document.querySelector('.slider_text'); //Label année pour les images (permet de situer le contexte).

 // Tableau de toutes les images pour une page donnée.
var imagesLevelDesign = ['level_design-2017.png', 'level_design-2017_1.png', 'level_design-2020.png', 'level_design-2020_1.png', 'level_design-2020_2.png',
'level_design-2020_3.png', 'level_design-2021.png', 'level_design-2021_1.png', 'level_design-2021_2.png', 'level_design-2021_3.png',
'level_design-2021_4.png', 'level_design-2021_5.png', 'level_design-2021_6.png', 'level_design-2021_7.png', 'level_design-2021_8.png', 'level_design-2021_9.png',
'level_design-2022_1.png', 'level_design-2022_2.png', 'level_design-2022_3.png', 'level_design-2022_4.png', 'level_design-2022_5.png', 'level_design-2022_6.png',
'level_design-2022_7.png'];


var i = 0; //current image index.

function prev(){

    if(i <= 0) i = imagesLevelDesign.length; // si i <= 0 on remet l'index au dernière élément de la liste des images. 

    i--; // C'est ici que ce fait la décrémentation au lieu de mettre imagesLevelDesign.length - 1.

    // Pour afficher les images.
    if(imagesLevelDesign[i].includes("2017")){
        anneeImage.innerHTML = "2017"; // Si l'image est de 2017 changer le label. Si le label est déjà à 2017 ne rien faire.
    }

    else if(imagesLevelDesign[i].includes("2020")){
        anneeImage.innerHTML = "2020";
    }

    else if(imagesLevelDesign[i].includes("2021")){
        anneeImage.innerHTML = "2021"; // Si l'image est de 2021 changer le label. Si le label est déjà à 2021 ne rien faire.
    }

    else if(imagesLevelDesign[i].includes("2022")){
        anneeImage.innerHTML = "2022";
    }

    return setImg();
}

function next(){

    if(i >= imagesLevelDesign.length-1) i = -1; // Si i >= au dernier élément de la liste d'image on remet i à 0.

    i++; // C'est ici que ce fait l'incrémentation pour passer de -1 à 0.

    if(imagesLevelDesign[i].includes("2017")){
        anneeImage.innerHTML = "2017"; 
    }

    else if(imagesLevelDesign[i].includes("2020")){
        anneeImage.innerHTML = "2020";
    }

    else if(imagesLevelDesign[i].includes("2021") ){
        anneeImage.innerHTML = "2021";
    }

    else if(imagesLevelDesign[i].includes("2022")){
        anneeImage.innerHTML = "2022";
    }

    return setImg(); // On retourne donc l'index à mettre (set) pour choisir la bonne image.
}

// Fonction pour changer les images.
function setImg(){
    return slider_img_level_design.setAttribute('src', 'img_projet_perso/' + imagesLevelDesign[i]);
}
