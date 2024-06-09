let images = ['img/LaMartine.png', 'img/ChicoutimiUQAC.png'];
let loadedImages = 0;

function preloadImage(url, index, callback) {
    var img = new Image();
    img.onload = function() {
        loadedImages++;
        if (loadedImages === images.length) {
            callback();
        }
    };
    img.src = url;
}

function preloadImages(images, callback) {
    images.forEach(function(url, index) {
        preloadImage(url, index, callback);
    });
}

preloadImages(images, function() {
    // Code to execute after all images have finished loading
    console.log("All images have been preloaded.");
});