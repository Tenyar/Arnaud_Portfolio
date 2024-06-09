var slider_img_MEGA = document.querySelector('.slider-img_MEGA_SAE');

var imagesMega = ['Mega_SAE_1', 'Mega_SAE_2', 'Mega_SAE_3', 'Mega_SAE_4'];

var i = 0; //current image index.

function prev(){
    if(i <= 0) i = imagesMega.length;
    i--;
    return setImg();
}

function next(){
    if(i >= imagesMega.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img_MEGA.setAttribute('src', 'img/' + (imagesMega[i] + '.png'));
}