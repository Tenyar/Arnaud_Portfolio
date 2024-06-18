let slider_img_diag = document.querySelector('.slider-img_SAE3_01_Diag');
let slider_img_maquette = document.querySelector('.slider-img_SAE3_01_Maqt');
let slider_img_real = document.querySelector('.slider-img_SAE3_01_Real');


let imagesDiag = ['SAE_3.01_1_1', 'SAE_3.01_1_2', 'SAE_3.01_1_3', 'SAE_3.01_1_4'];
let imagesMaquette = ['SAE_3.01_2_1', 'SAE_3.01_2_2', 'SAE_3.01_2_3'];
let imagesReal = ['SAE_3.01_3_1', 'SAE_3.01_3_2', 'SAE_3.01_3_3'];


let i = 0; //current image index.

function prev(context){
    if(context == 1){
        if(i <= 0) i = imagesDiag.length;
        i--;
        return setImg(context);
    } else if (context == 2){
        if(i <= 0) i = imagesMaquette.length;
        i--;
        return setImg(context);
    } else {
        if(i <= 0) i = imagesReal.length;
        i--;
        return setImg(context);
    }
}

function next(context){
    if(context == 1){
        if(i >= imagesDiag.length - 1) i = -1;
        i++;
        return setImg(context);
    } else if (context == 2){
        if(i >= imagesMaquette.length - 1) i = -1;
        i++;
        return setImg(context);
    } else {
        if(i >= imagesReal.length - 1) i = -1;
        i++;
        return setImg(context);
    }
}

function setImg(context){
    if(context == 1){
        return slider_img_diag.setAttribute('src', 'img/' + (imagesDiag[i] + '.png'));
    } else if (context == 2){
        return slider_img_maquette.setAttribute('src', 'img/' + (imagesMaquette[i] + '.png'));
    } else {
        return slider_img_real.setAttribute('src', 'img/' + (imagesReal[i] + '.png'));
    }
}