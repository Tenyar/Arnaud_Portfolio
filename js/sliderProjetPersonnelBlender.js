var slider_img_blender = document.querySelector('.slider-img_blender');

var imagesBlender = ['3d-models-1.png', '3d-models-4.png', '3d-models-5.png', '3d-models-6.png', '3d-models-7.png', '3d-models-8.png'];

var i = 0; //current image index.

function prev(){
    if(i <= 0) i = imagesBlender.length;
    i--;
    return setImg();
}

function next(){
    if(i >= imagesBlender.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img_blender.setAttribute('src', 'img_projet_perso/' + imagesBlender[i]);
}