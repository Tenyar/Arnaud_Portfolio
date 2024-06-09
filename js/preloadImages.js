let images = ['../img/IUT2_v2.png', '../img/LaMartine.png', '../img/ChicoutimiUQAC.png'];

function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

function preloadImages(images) {
    images.forEach(function(url) {
        preloadImage(url);
    });
}

preloadImages(images);