let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');

Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};

const instagramIcon = document.querySelector('.fa-brands.fa-instagram');
instagramIcon.addEventListener('click', function() {

    window.open('https://www.instagram.com/infyspark/?igsh=YWc2aW50aXFrd3Zm',  );
});

const facebookIcon = document.querySelector('.fa-brands.fa-facebook');
facebookIcon.addEventListener('click', function() {

    window.open('https://www.facebook.com/infyspark',  );

});

const twitterIcon = document.querySelector('.fa-brands.fa-twitter');
twitterIcon.addEventListener('click', function() {

  window.open('https://x.com/InfySpark?t=3rH1PU-C9eCb2xVnsBszmQ&s=09',  );
});

// function getFile()
// {
//   document.getElementById('file').click();
// }

var swiper = new Swiper(".home-slid", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});



var swiper = new Swiper(".team-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      "0": {
        slidesPerView: 1,
        autoplay:{
            delay:700,
            disableOnInteraction:false,
        },
      },
      "768": {
        slidesPerView: 2,
          
      },
      "1020": {
        slidesPerView: 3,
          
      },
    },
  });
