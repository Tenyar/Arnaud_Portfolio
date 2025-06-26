let slider_img_diag = document.querySelector('.slider-Uqac_projet_I');
let slider_img_real = document.querySelector('.slider-Uqac_projet_I_real');


let imagesDiag = ['uqac_projet_I_1', 'uqac_projet_I_2', 'uqac_projet_I_3', 'uqac_projet_I_4'];
let imagesReal = ['uqac_projet_I_5', 'uqac_projet_I_6', 'uqac_projet_I_7', 'uqac_projet_I_8', 'uqac_projet_I_9', 'uqac_projet_I_10'];


let i = 0; //current image index.

function prev(context){
    if(context == 1){
        if(i <= 0) i = imagesDiag.length;
        i--;
        return setImg(context);
    }
    else {
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
    } else {
        if(i >= imagesReal.length - 1) i = -1;
        i++;
        return setImg(context);
    }
}

function setImg(context){
    if(context == 1){
        return slider_img_diag.setAttribute('src', 'img/' + (imagesDiag[i] + '.png'));
    } else {
        return slider_img_real.setAttribute('src', 'img/' + (imagesReal[i] + '.png'));
    }
}