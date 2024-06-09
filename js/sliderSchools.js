let slider_img_schools = document.querySelector('.slider-studies-redirect');
let slider_img_schools_logo = document.querySelector('.slider-studies-redirect-logo');
let slider_studies_redirect_link = document.querySelector('.slider-studies-redirect-link');

// Set the default link for the first image
slider_studies_redirect_link.setAttribute('href', 'https://iut2.univ-grenoble-alpes.fr/fr/');

let imageSchools = ['IUT2', 'LaMartine', 'ChicoutimiUQAC'];
let imageSchoolsLogo = ['IUT2_logo', 'LaMartine_logo', 'ChicoutimiUQAC_logo'];

let i = 0; //current image index.


function next() {
  if (i >= imageSchools.length - 1) i = -1;
  i++;
  if (i >= imageSchoolsLogo.length - 1) i = -1;
  i++;

  // Fade out the current image and logo
  slider_img_schools.classList.add('fade');
  slider_img_schools_logo.classList.add('fade');

  setTimeout(() => {
    setImg();

    // Fade in the new image and logo
    slider_img_schools.classList.remove('fade');
    slider_img_schools_logo.classList.remove('fade');
  }, 1000); // Wait for the fade-out transition to finish before changing the image and logo
}

function setImg() {
  slider_img_schools.setAttribute('src', 'img/' + (imageSchools[i] + '.png'));
  slider_img_schools_logo.setAttribute('src', 'img/' + (imageSchoolsLogo[i] + '.png'));
}

// Call the next function every 10 seconds
setInterval(next, 5000);