// Swiper slide side_bar
var swiper = new Swiper(".slide-swp ", {
  pagination: {
  el: ".swiper-pagination",
  dynamicBullets: true,
  clickable:true,
},
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true,
  },
  autoplay:{
    delay:2500,
  },
  loop:true,
});
  
  // Swiper slide sale_sec
  var swiper = new Swiper(".sale_sec", {
  
      slidesPerView:5,
  
      spaceBetween:3,
  
      autoplay:{
        delay:3000,
      },
      navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
      },
      loop:true,
    });
  
  // Swiper slide product
  var swiper = new Swiper(".product_swip", {

    slidesPerView:3,

    spaceBetween:30,

    autoplay:{
      delay:3000,
    },
    navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev',
    },

    loop:true,
  });