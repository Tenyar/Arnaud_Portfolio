var slider_img_sae2_03 = document.querySelector('.slider-img_SAE2_03');

var imagesSQL_sae2_03 = ['SAE2.03-1.png', 'SAE2.03-2.png', 'SAE2.03-3.png', 'SAE2.03-4.png', 'SAE2.03-5.png'];

var i = 0; //current image index.

function prev(){
    if(i <= 0) i = imagesSQL_sae2_03.length;
    i--;
    return setImg();
}

function next(){
    if(i >= imagesSQL_sae2_03.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img_sae2_03.setAttribute('src', 'img/' + imagesSQL_sae2_03[i]);
}