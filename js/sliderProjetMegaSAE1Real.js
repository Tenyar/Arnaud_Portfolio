var slider_img_MEGAReal = document.querySelector('.slider-img_MEGA_SAE_Real');

var imagesMegaReal = ['Mega_SAE_Real_1', 'Mega_SAE_Real_2', 'Mega_SAE_Real_3', 'Mega_SAE_Real_4'];

var i = 0; //current image index.

function prevReal(){
    if(i <= 0) i = imagesMegaReal.length;
    i--;
    return setImgReal();
}

function nextReal(){
    if(i >= imagesMegaReal.length-1) i = -1;
    i++;
    return setImgReal();
}

function setImgReal(){
    return slider_img_MEGAReal.setAttribute('src', 'img/' + (imagesMegaReal[i] + '.png'));
}