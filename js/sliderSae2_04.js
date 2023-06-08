var slider_img_sae2_04 = document.querySelector('.slider-img_SAE2_04');

var imagesSQL_sae2_04 = ['sql_2_04.png', 'sql_2_04_1.png', 'sql_2_04_2.png', 'sql_2_04_3.png'];

var i = 0; //current image index.

function prev(){
    if(i <= 0) i = imagesSQL_sae2_04.length;
    i--;
    return setImg();
}

function next(){
    if(i >= imagesSQL_sae2_04.length-1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return slider_img_sae2_04.setAttribute('src', 'img/' + imagesSQL_sae2_04[i]);
}